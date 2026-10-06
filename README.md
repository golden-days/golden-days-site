# Golden Days Adult Day Health Care — website

The marketing website for Golden Days Adult Day Health Care, an adult day health care
center in West Sacramento, California. Six pages: Home, About, Services, Transportation,
Enrollment, and Contact.

**This is a draft.** Most of the copy is realistic sample text, not confirmed
information. Every invented fact ends with `[PLACEHOLDER]` so it is obvious on the page.

## Running it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000.

## Environment variables

Both are optional for local development. Copy `.env.example` to `.env.local` and fill
them in, or set them in the Vercel project settings.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | The [Formspree](https://formspree.io) address the contact form posts to. When it is empty, the form shows a "not connected yet" message instead of sending. |
| `NEXT_PUBLIC_SITE_URL` | The public address of the site, for example `https://www.goldendays.com`. Used by the sitemap and the social sharing tags. Defaults to `https://www.example.com`. |

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Check for draft content, then build the site. |
| `npm start` | Serve a finished build. |
| `npm run lint` | Check the code style. |
| `npm run check-placeholders` | List every `[PLACEHOLDER]` and the fake phone number. |

### About `npm run check-placeholders`

It scans `app/`, `components/`, `content/`, and `lib/` and prints every line that still
holds draft content.

- On your computer and in **Vercel preview** builds it prints the list and passes, so you
  can keep previewing the draft site.
- In a **Vercel production** build (`VERCEL_ENV=production`) it fails the build, so draft
  content cannot reach the live site.
- Add `--strict` to make it fail anywhere: `node scripts/check-placeholders.mjs --strict`.

## Editing the site

### Changing the words

All of the English text lives in **`content/en.ts`**. Edit the strings there; you do not
need to touch the page files. When you replace a sample fact with a real one, delete the
` [PLACEHOLDER]` at the end of that string.

Another language can be added later by copying `content/en.ts` to `content/ru.ts` or
`content/zh.ts` and translating the strings. The fonts already include Cyrillic
characters.

### Changing the colors

The brand colors are defined once, in the `@theme` block at the top of
`app/globals.css`. They become Tailwind classes such as `bg-navy` and `text-gold`.

| Token | Value | Used for |
| --- | --- | --- |
| `navy` | `#30317E` | Headings, links, primary buttons |
| `navy-dark` | `#22235E` | Hover states, footer background |
| `gold` | `#F6D375` | Secondary buttons, highlight bands |
| `gold-deep` | `#E0B64A` | Borders and icons only — never text |
| `cream` | `#FFF8E3` | Alternate section backgrounds |
| `ink` | `#1A1A1A` | Body text |

Two contrast rules matter: never put white text on gold, and never use `gold-deep` for
text. Gold backgrounds carry navy or ink text only.

### Photos

The site currently shows clearly labeled drawings where photos will go, built by
`components/PhotoPlaceholder.tsx`. There are three kinds: `building`, `interior`, and
`bus`. To use a real photo, put the file in `public/` and replace the
`<PhotoPlaceholder>` tag on the page with a `next/image` `<Image>`, keeping descriptive
alt text.

### The logo

`public/logo.png` is the official logo and should be used as-is. It has a transparent
background and a navy caduceus, so it only belongs on white or cream — never on navy or
any dark color.

## Before launch

- [ ] Replace every `[PLACEHOLDER]` string in `content/en.ts` with confirmed information.
- [ ] Replace the fake phone number, email, and address.
- [ ] Switch the public email to `1215goldendays@gmail.com`: update `email` and `emailHref`
      in `content/en.ts` and `email` in `components/LocalBusinessJsonLd.tsx`. If form messages
      should go there too, add and verify it under Linked Emails in Formspree, then change
      the form's "Send emails to" address.
- [ ] Add real photos of the building, the rooms, and the buses.
- [ ] Set `NEXT_PUBLIC_FORM_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` in Vercel.
- [ ] Remove `robots: "noindex"` from `lib/seo.ts` and from `app/layout.tsx` so search
      engines can index the site.
- [ ] Confirm `npm run check-placeholders` reports nothing.

## Built with

[Next.js](https://nextjs.org) (App Router), TypeScript, and [Tailwind CSS](https://tailwindcss.com).
Deploys on [Vercel](https://vercel.com) with no extra configuration.
