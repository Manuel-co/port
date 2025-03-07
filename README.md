# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful UI with animations, dark mode, and a contact form with EmailJS integration.

## 🚀 Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🎯 SEO optimized
- 🔍 TypeScript for type safety

## 📁 Project Structure

```
├── app/
│   ├── contact/
│   │   └── page.tsx         # Contact page with form
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── About.tsx       # About section
│   │   ├── Blog.tsx        # Blog section
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Projects.tsx    # Projects section
│   │   └── Skills.tsx      # Skills section
│   └── ui/
│       ├── animated-page.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
└── types/                  # TypeScript types
```

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Manuel-co/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 EmailJS Setup

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. Get your service ID, template ID, and public key
5. Add your credentials to the `.env.local` file
6. The contact form will automatically use these environment variables

## 🎨 Customization

- Update personal information in the respective components
- Modify the color scheme in `tailwind.config.js`
- Add your own sections or modify existing ones
- Update the contact form template in EmailJS

## 📱 Responsive Design

The website is fully responsive and works well on:
- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Manuel-co/portfolio/issues).

## 👤 Author

**Nweke Emmanuel**
- GitHub: [@Manuel-co](https://github.com/Manuel-co)
- LinkedIn: [Nweke Emmanuel](https://linkedin.com/in/nweke-emmanuel-435a3923b/)
- Twitter: [@NwekeManuchimso](https://twitter.com/NwekeManuchimso) 