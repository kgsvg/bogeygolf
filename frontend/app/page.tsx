import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: 'Bogey Golf Club – Business Tools for Golf Content Creators',
  description:
    'The all-in-one platform for social media golf creators. Manage brand deals, UGC content, custom email domain, link-in-bio pages with analytics, and creator communications. Built for Instagram, TikTok, and YouTube golf creators.',
  keywords: [
    'golf content creator platform',
    'golf creator tools',
    'golf influencer brand deals',
    'UGC golf content',
    'custom email domain for creators',
    'link in bio for golf creators',
    'golf creator business',
    'golf influencer management',
    'social media golf creator',
    'golf brand partnerships',
  ],
  alternates: {
    canonical: 'https://bogeygolf.club',
  },
  openGraph: {
    title: 'Bogey Golf Club – Business Tools for Golf Content Creators',
    description:
      'Manage brand deals, UGC content, custom email domain, and link-in-bio analytics — all in one platform built for golf creators.',
    url: 'https://bogeygolf.club',
    siteName: 'Bogey Golf Club',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bogey Golf Club – Business Tools for Golf Content Creators',
    description:
      'The all-in-one platform for golf creators to manage brand deals, UGC, custom email, and link-in-bio analytics.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://bogeygolf.club/#organization',
      name: 'Bogey Golf Club',
      url: 'https://bogeygolf.club',
      description:
        'The all-in-one business platform for social media golf content creators. Manage brand partnerships, UGC content delivery, custom email domains, link-in-bio pages with analytics, and creator communications.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bogeygolf.club/#website',
      url: 'https://bogeygolf.club',
      name: 'Bogey Golf Club',
      publisher: { '@id': 'https://bogeygolf.club/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Bogey Golf Club',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://bogeygolf.club',
      description:
        'Business management platform for golf content creators. Includes brand deal tracking, UGC content hub, custom email domain, link-in-bio pages with analytics, and a creator communications inbox.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        description: 'Join the waitlist for early access.',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Golf content creators, golf influencers, golf YouTubers, golf TikTokers',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Bogey Golf Club?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bogey Golf Club is an all-in-one business platform built specifically for social media golf creators. It brings together brand deal management, UGC content delivery, a custom email domain, a link-in-bio page with analytics, and a creator communications inbox.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is Bogey Golf Club for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It\'s built for golf content creators on Instagram, TikTok, and YouTube — whether you\'re just starting to land your first brand deals or you\'re already juggling multiple partnerships and need a better system.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does brand deal management work for golf creators?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can log every brand partnership with details like deliverables, deadlines, payment terms, and contact information. Track the status of each deal from first outreach through to final content delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a custom email domain for golf creators?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instead of pitching brands from a Gmail address, you\'ll send emails from yourname@yourbrand.com. It signals professionalism and helps brands take you seriously.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is Bogey Golf Club launching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bogey Golf Club is actively being built. Join the waitlist to get early access and be the first notified at launch.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
