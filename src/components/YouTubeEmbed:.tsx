// import styled from 'styled-components'

// type EmbedProps = { aspectRatio: number }

// const Embed = styled(({ aspectRatio }: EmbedProps) => (
//   <div style={{ ['--aspectRatio' as any]: aspectRatio }} />
// ))<{ aspectRatio: number }>(({ theme: _ }) => ({
//   '--aspectRatio': '16/9',
//   '&::before': {
//     content: '""',
//     display: 'block',
//     paddingBottom: 'calc(100% / (var(--aspectRatio)))',
//   },
// }))

// function YoutubeEmbed({ aspectRatio }: EmbedProps) {

//   return (
//     <Embed aspectRatio={aspectRatio}>
//       <iframe
//         src="https://www.youtube.com/embed/rGQ-Vzy8aso"
//         title="YouTube video player"
//         frameBorder="0"
//         allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//         allowFullScreen
//       />
//     </Embed>
//   )
// }
