import { isNonNullable } from '@src/utils/isNonNullable'

type BaseError = {
  name: string
  message: string
}
export type FullError = BaseError & {
  graphQLErrors?: readonly BaseError[] | undefined
}

export function combineErrors(
  errors: (FullError | undefined | null)[] | null | undefined
) {
  return errors?.filter(isNonNullable).map(serializableError) ?? []
}

export function serializableError(err: FullError) {
  if (!err) {
    return err
  }
  const { name, message, graphQLErrors } = err

  return {
    name,
    message,
    ...(graphQLErrors
      ? {
          graphQLErrors: graphQLErrors.map((gqlErr) => ({
            name: gqlErr.name,
            message: gqlErr.message,
          })),
        }
      : {}),
  }
}
