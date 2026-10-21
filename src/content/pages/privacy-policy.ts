import type { ContentPage } from '@/content/types'

// Migrated from Prismic. Edit freely: this file is now the source of truth.
const privacyPolicy = {
  path: '/legal/privacy-policy',
  meta: {
    noindex: false,
  },
  sections: [
    {
      type: 'hero',
      title: 'Privacy policy',
      description: 'The steps we take to ensure your privacy',
    },
    {
      type: 'richText',
      content: [
        {
          type: 'h2',
          content: [
            {
              text: 'Introduction',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'At Plural, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.',
          ],
        },
        {
          type: 'p',
          content: [
            "Our users' privacy is important to us, and we have adopted this privacy policy, which applies to any and all information you submit to us in connection with your use, in order to ensure that you are fully informed about what information we collect from you, how we use it, our legal basis for doing so, and with whom we share it. We also describe here your rights with respect to the information that you provide us.",
          ],
        },
        {
          type: 'p',
          content: [
            "It is important to note that this Privacy Policy only applies to information that we collect. Therefore, if you use any links that lead to websites or other content owned or operated by third parties or if you access any other website, this Privacy Policy no longer applies. Further, if you use any features that are provided by third parties (which are described below), your use of those features is governed by those third parties' agreements and policies. You should review the privacy policies adopted by those third parties to ensure that you know what information is being collected and for what it is being used.",
          ],
        },
        {
          type: 'p',
          content: [
            "Remember that your use of Plural's Services is at all times subject to our ",
            {
              text: 'Terms of Use',
              href: 'https:/www.plural.sh/legal/terms-and-conditions',
            },
            ', which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.',
          ],
        },
        {
          type: 'p',
          content: [
            'You may print a copy of this Privacy Policy by clicking here. If you have a disability, you may access this Privacy Policy in an alternative format by contacting to our ',
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            '.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Privacy Policy Table of Contents',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['What this Privacy Policy Covers'],
            ['Personal Data'],
            ['Categories of Personal Data We Collect'],
            ['Categories of Sources of Personal Data'],
            [
              'Our Commercial or Business Purposes for Collecting Personal Data',
            ],
            ['How We Share Your Personal Data'],
            ['Tracking Tools and Opt-Out'],
            ['Data Security and Retention'],
            ['Personal Data of Children'],
            ['California Resident Rights'],
            ['Other State Law Privacy Rights'],
            ['European Union Data Subject Rights'],
            ['Changes to this Privacy Policy'],
            ['Contact Information'],
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'What this Privacy Policy Covers',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. "Personal Data" means any information that identifies or relates to a particular individual and also includes information referred to as "personally identifiable information" or "personal information" under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don\'t own or control or people we don\'t manage.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'This chart details the categories of Personal Data that we collect and have collected over the past 12 months:',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Profile or Contact Data',
              bold: true,
            },
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [['First and last name'], ['Email'], ['Phone number']],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Service Providers'],
            ['Analytics Partners'],
            ['Parties You Authorize, Access or Authenticate'],
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Payment Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Payment card type'],
            ['Full payment card number'],
            ['Last 4 digits of payment card'],
            ['Billing address'],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'Service Providers (specifically our payment processing partner, currently Stripe, Inc.)',
            ],
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Device/IP Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['IP address'],
            ['Device ID'],
            ['Domain server'],
            [
              'Type of device/operating system/browser used to access the Services',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Service Providers'],
            ['Advertising Partners'],
            ['Analytics Partners'],
            ['Business Providers'],
            ['Parties You Authorize, Access or Authenticate'],
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Web Analytics',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Web page interactions'],
            [
              'Referring webpage/source through which you accessed the Services',
            ],
            ['Non-identifiable request IDs'],
            [
              'Statistics associated with the interaction between device or browser and the Services',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Service Providers'],
            ['Advertising Partners'],
            ['Analytics Partners'],
            ['Business Partners'],
            ['Parties You Authorize, Access or Authenticate'],
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Social Network Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [['Email']],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [['Parties You Authorize, Access or Authenticate']],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Geolocation Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Examples',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [['IP-address-based location information']],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Categories of Third Parties With Whom We Share this Personal Data:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Service Providers'],
            ['Advertising Partners'],
            ['Analytics Partners'],
            ['Business Providers'],
            ['Parties You Authorize, Access or Authenticate'],
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Categories of Sources of Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We collect Personal Data about you from the following categories of sources:',
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: '(1) You',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'When you provide such information directly to us:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'When you create an account or use our interactive tools and Services.',
            ],
            [
              'When you voluntarily provide information in free-form text boxes through the Services or through responses to surveys or questionnaires.',
            ],
            ['When you send us an email or otherwise contact us.'],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'When you use the Services and such information is collected automatically:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'If you use a location-enabled browser, we may receive information about your location.',
            ],
            [
              'If you download and install certain applications and software we make available, we may receive and collect information transmitted from your computing device for the purpose of providing you the relevant Services, such as information regarding when you are logged on and available to receive updates or alert notices.',
            ],
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: '(2) Third Parties',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Social Networks',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'If you provide your social network account credentials to us or otherwise sign in to the Services through a third-party site or service, some content and/or information in those accounts may be transmitted into your account with us.',
            ],
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Our Commercial or Business Purposes for Collecting Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Providing, Customizing and Improving the Services',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Creating and managing your account or other user profiles.'],
            ['Processing orders or other transactions; billing.'],
            [
              'Providing you with the products, services or information you request.',
            ],
            [
              'Meeting or fulfilling the reason you provided the information to us.',
            ],
            ['Providing support and assistance for the Services.'],
            [
              'Improving the Services, including testing, research, internal analytics and product development.',
            ],
            [
              'Personalizing the Services, website content and communications based on your preferences.',
            ],
            ['Doing fraud protection, security and debugging.'],
            [
              'Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Marketing the Services',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [['Marketing and selling the Services.']],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Corresponding with You',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'Responding to correspondence that we receive from you, contacting you when necessary or requested, and sending you information about Plural or the Services.',
            ],
            [
              'Sending emails and other communications according to your preferences or that display content that we think will interest you.',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Meeting Legal Requirements and Enforcing Legal Terms',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'Fulfilling our legal obligations under applicable law, regulation, court order or other legal process, such as preventing, detecting and investigating security incidents and potentially illegal or prohibited activities.',
            ],
            [
              'Protecting the rights, property or safety of you, Plural or another party.',
            ],
            ['Enforcing any agreements with you.'],
            [
              'Responding to claims that any posting or other content violates third-party rights.',
            ],
            ['Resolving disputes.'],
          ],
        },
        {
          type: 'p',
          content: [
            'We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated or incompatible purposes without providing you notice.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'How We Share Your Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We disclose your Personal Data to the categories of service providers and other parties listed in this section. Depending on state laws that may be applicable to you, some of these disclosures may constitute a "sale" of your Personal Data. For more information, please refer to the state-specific sections below.',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Service Providers. These parties help us provide the Services or perform business functions on our behalf. They include:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            ['Hosting, technology and communication providers'],
            ['Payment processors'],
            [
              'Our payment processing partner Stripe, Inc. ("Stripe") collects your voluntarily-provided payment card information necessary to process your payment.',
            ],
            [
              "Please see Stripe's terms of service and privacy policy for information on its use and storage of your Personal Data.",
            ],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Analytics Partners. These parties provide analytics on web traffic or usage of the Services. They include:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'Companies that track how users found or were referred to the Services.',
            ],
            [
              'Companies that track how users interact with the Services. Parties You Authorize, Access or Authenticate',
            ],
            ['Hosting, technology and communication providers.'],
            ['Payment processors.'],
            ['Third parties you access through the services.'],
            ['Social media services.'],
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Legal Obligations',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We may share any Personal Data that we collect with third parties in conjunction with any of the activities set forth under "Meeting Legal Requirements and Enforcing Legal Terms" in the "Our Commercial or Business Purposes for Collecting Personal Data" section above.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Business Transfers',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We may share any Personal Data that we collect with third parties in conjunction with any of the activities set forth under "Meeting Legal Requirements and Enforcing Legal Terms" in the "Our Commercial or Business Purposes for Collecting Personal Data" section above.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Data that is Not Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We may create aggregated, de-identified or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build and improve the Services and promote our business, provided that we will not share such data in a manner that could identify you.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Tracking Tools and Opt-Out',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs and JavaScript (collectively, "Cookies") to enable our servers to recognize your web browser, tell us how and when you visit and use our Services, analyze trends, learn about our user base and operate and improve our Services. Cookies are small pieces of data-- usually text files -- placed on your computer, tablet, phone or similar device when you use that device to access our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support "Do Not Track" requests sent from a browser at this time.',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'We use the following types of Cookies:',
              bold: true,
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              {
                text: 'Essential Cookies',
                bold: true,
              },
              ' — these are required for providing you with features or services that you have requested. For example, certain Cookies enable you to log into secure areas of our Services. Disabling these Cookies may make certain features and services unavailable.',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            "You can decide whether or not to accept Cookies through your internet browser's settings. Most browsers have an option for turning off the Cookie feature, which will prevent your browser from accepting new Cookies, as well as (depending on the sophistication of your browser software) allow you to decide on acceptance of each new Cookie in a variety of ways. You can also delete all Cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website and some of the Services and functionalities may not work.",
          ],
        },
        {
          type: 'p',
          content: [
            'To explore what Cookie settings are available to you, look in the "preferences" or "options" section of your browser\'s menu. To find out more information about Cookies, including information about how to manage and delete Cookies, please visit ',
            {
              text: 'https://allaboutcookies.org/',
              href: 'https:/allaboutcookies.org/',
            },
            ' or ',
            {
              text: 'https://ico.org.uk/for-the-public/online/cookies',
              href: 'https:/ico.org.uk/for-the-public/online/cookies',
            },
            ' if you are located in the European Union.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Data Security and Retention',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We seek to protect your Personal Data from unauthorized access, use and disclosure using appropriate physical, technical, organizational and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your computer or device and browser; and signing off after you have finished accessing your account. Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure.',
          ],
        },
        {
          type: 'p',
          content: [
            'We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes or collect fees owed, or is otherwise permitted or required by applicable law, rule or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Personal Data of Children',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'As noted in the ',
            {
              text: 'Terms of Use',
              href: 'https:/www.plural.sh/legal/terms-and-conditions',
            },
            ', we do not knowingly collect or solicit Personal Data about children under 16 years of age; if you are a child under the age of 16, please do not attempt to register for or otherwise use the Services or send us any Personal Data. If we learn we have collected Personal Data from a child under 16 years of age, we will delete that information as quickly as possible. If you believe that a child under 16 years of age may have provided Personal Data to us, please contact us at ',
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            '.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'State Law Privacy Rights ##',
              bold: true,
            },
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'California Resident Rights',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            "Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to contact us to prevent disclosure of Personal Data to third parties for such third parties' direct marketing purposes; in order to submit such a request, please contact us at ",
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            '.',
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Nevada Resident Rights',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'If you are a resident of Nevada, you have the right to opt-out of the sale of certain Personal Data to third parties who intend to license or sell that Personal Data. You can exercise this right by contacting us at ',
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            ' with the subject line "Nevada Do Not Sell Request" and providing us with your name and the email address associated with your account.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'European Union Data Subject Rights',
              bold: true,
            },
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'EU Residents',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'If you are a resident of the European Union ("EU"), United Kingdom, Lichtenstein, Norway or Iceland, you may have additional rights under the EU General Data Protection Regulation (the "GDPR") with respect to your Personal Data, as outlined below.',
          ],
        },
        {
          type: 'p',
          content: [
            'For this section, we use the terms "Personal Data" and "processing" as they are defined in the GDPR, but "Personal Data" generally means information that can be used to individually identify a person, and "processing" generally covers actions that can be performed in connection with data such as collection, use, storage and disclosure. Plural will be the controller of your Personal Data processed in connection with the Services. If there are any conflicts between this this section and any other provision of this Privacy Policy, the policy or portion that is more protective of Personal Data shall control to the extent of such conflict. If you have any questions about this section or whether any of the following applies to you, please contact us at ',
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            ".. Note that we may also process Personal Data of our customers' end users or employees in connection with our provision of certain services to customers, in which case we are the processor of Personal Data. If we are the processor of your Personal Data (i.e., not the controller), please contact the controller party in the first instance to address your rights with respect to such data.",
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Personal Data We Collect',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'The “',
            {
              text: 'Categories of Personal Data We Collect',
              href: '/legal/privacy-policy#categories-of-data',
            },
            '” section above details the Personal Data that we collect from you.',
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Personal Data Use and Processing Grounds',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'The “',
            {
              text: 'Our Commercial or Business Purposes for Collecting Personal Data',
              href: '/legal/privacy-policy#our-purposes',
            },
            '" section above explains how we use your Personal Data.',
          ],
        },
        {
          type: 'p',
          content: [
            'We will only process your Personal Data if we have a lawful basis for doing so. Lawful bases for processing include consent, contractual necessity and our "legitimate interests" or the legitimate interest of others, as further described below.',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Contractual Necessity:',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We process the following categories of Personal Data as a matter of "contractual necessity", meaning that we need to process the data to perform under our ',
            {
              text: 'Terms of Use',
              href: 'https:/www.plural.sh/legal/terms-and-conditions',
            },
            ' with you, which enables us to provide you with the Services. When we process data due to contractual necessity, failure to provide such Personal Data will result in your inability to use some or all portions of the Services that require such data.',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Profile or Contact Data'],
            ['Payment Data'],
            ['Device/IP Data'],
            ['Web Analytics'],
            ['Social Network Data'],
            ['Geolocation Data'],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Legitimate Interest:',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'We process the following categories of Personal Data when we believe it furthers the legitimate interest of us or third parties:',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Profile or Contact Data'],
            ['Payment Data'],
            ['Device/IP Data'],
            ['Web Analytics'],
            ['Social Network Data'],
            ['Geolocation Data'],
            [
              'We may also de-identify or anonymize Personal Data to further our legitimate interests.',
            ],
          ],
        },
        {
          type: 'p',
          content: [
            'Examples of these legitimate interests include (as described in more detail above):',
          ],
        },
        {
          type: 'ul',
          items: [
            ['Providing, customizing and improving the Services.'],
            ['Marketing the Services.'],
            ['Corresponding with you.'],
            ['Meeting legal requirements and enforcing legal terms.'],
            ['Completing corporate transactions.'],
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Consent:',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'In some cases, we process Personal Data based on the consent you expressly grant to us at the time we collect such data. When we process Personal Data based on your consent, it will be expressly indicated to you at the point and time of collection.',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'Other Processing Grounds:',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'From time to time we may also need to process Personal Data to comply with a legal obligation, if it is necessary to protect the vital interests of you or other data subjects, or if it is necessary for a task carried out in the public interest.',
          ],
        },
        {
          type: 'h3',
          content: [
            {
              text: 'Sharing Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'The “',
            {
              text: 'How We Share Your Personal Data',
              href: '/legal/privacy-policy#how-we-share',
            },
            '” section above details how we share your Personal Data with third parties.',
          ],
        },
        {
          type: 'p',
          content: [
            {
              text: 'EU Data Subject Rights',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'You have certain rights with respect to your Personal Data, including those set forth below. For more information about these rights, or to submit a request, please email us at ',
            {
              text: 'support@plural.sh',
              href: 'mailto:support@plural.sh',
            },
            '. Please note that in some circumstances, we may not be able to fully comply with your request, such as if it is frivolous or extremely impractical, if it jeopardizes the rights of others, or if it is not required by law, but in those circumstances, we will still respond to notify you of such a decision. In some cases, we may also need you to provide us with additional information, which may include Personal Data, if necessary to verify your identity and the nature of your request.',
          ],
        },
        {
          type: 'ul',
          items: [
            [
              'Access:You can request more information about the Personal Data we hold about you and request a copy of such Personal Data. You can also access certain of your Personal Data by logging on to your account.',
            ],
            [
              'Rectification:If you believe that any Personal Data we are holding about you is incorrect or incomplete, you can request that we correct or supplement such data. You can also correct some of this information directly by logging on to your account.',
            ],
            [
              'Erasure:You can request that we erase some or all of your Personal Data from our systems.',
            ],
            [
              'Withdrawal of Consent: If we are processing your Personal Data based on your consent (as indicated at the time of collection of such data), you have the right to withdraw your consent at any time. Please note, however, that if you exercise this right, you may have to then provide express consent on a case-by-case basis for the use or disclosure of certain of your Personal Data, if such use or disclosure is necessary to enable you to utilize some or all of our Services.',
            ],
            [
              'Portability: You can ask for a copy of your Personal Data in a machine-readable format. You can also request that we transmit the data to another controller where technically feasible.',
            ],
            [
              'Objection: You can contact us to let us know that you object to the further use or disclosure of your Personal Data for certain purposes, such as for direct marketing purposes.',
            ],
            [
              'Restriction of Processing: You can ask us to restrict further processing of your Personal Data.',
            ],
            [
              "Right to File Complaint: You have the right to lodge a complaint about Plural's practices with respect to your Personal Data with the supervisory authority of your country or EU Member State. A list of Supervisory Authorities is available here.",
            ],
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Transfers of Personal Data',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'The Services are hosted and operated in the United States ("U.S.") through Plural and its service providers, and if you do not reside in the U.S., laws in the U.S. may differ from the laws where you reside. By using the Services, you acknowledge that any Personal Data about you, regardless of whether provided by you or obtained from a third party, is being provided to Plural in the U.S. and will be hosted on U.S. servers, and you authorize Plural to transfer, store and process your information to and in the U.S., and possibly other countries.',
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Changes to this Privacy Policy',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            "We're constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time, but we will alert you to any such changes by placing a notice on the Plural website, by sending you an email and/or by some other means. Please note that if you've opted not to receive legal notice emails from us (or you haven't provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.",
          ],
        },
        {
          type: 'h2',
          content: [
            {
              text: 'Contact Information',
              bold: true,
            },
          ],
        },
        {
          type: 'p',
          content: [
            'If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data or your choices and rights regarding such collection and use, please do not hesitate to contact us at:',
          ],
        },
        {
          type: 'p',
          content: ['app.plural.sh'],
        },
        {
          type: 'p',
          content: [
            {
              text: 'privacy@plural.sh',
              href: 'mailto:privacy@plural.sh',
            },
          ],
        },
        {
          type: 'p',
          content: ['1460 Broadway, New York, NY, 10036'],
        },
        {
          type: 'p',
          content: ['Effective 2025-07-15'],
        },
      ],
    },
  ],
} satisfies ContentPage

export default privacyPolicy
