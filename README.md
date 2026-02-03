# Sneha Maurya - Portfolio Website

A creative, personality-driven portfolio website with a binary/code aesthetic, featuring smooth animations and easy-to-update content.

## Features

- **Binary/Code Aesthetic**: Subtle animated binary digits in the background
- **Quick Access Bar**: Floating buttons for Email, CV, Experience, and Blog
- **Smooth Animations**: Fade-in effects and hover interactions
- **Responsive Design**: Works beautifully on all devices
- **Easy to Update**: Simple component structure for content updates
- **Personal Touch**: Gallery for black and white photos, personal introduction

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Updating Content

### 1. Personal Information

Edit `components/sections/Hero.tsx` to update:
- Your name and title
- Introduction text
- Contact buttons

### 2. Experience

Edit `components/sections/Experience.tsx`:
- Update the `experiences` array with your work history
- Add or remove experience entries

### 3. Projects

Edit `components/sections/Projects.tsx`:
- Update the `projects` array
- Add GitHub links, descriptions, and achievements

### 4. Blog Posts

Edit `components/sections/Blog.tsx`:
- Update the `blogPosts` array
- Add links to your actual blog posts

### 5. Gallery Photos

1. Add your black and white photos to `/public/gallery/` folder
2. Update `components/sections/Gallery.tsx`:
   - Replace placeholder image paths with your actual photos
   - Update titles and descriptions

### 6. About Section

Edit `components/sections/About.tsx`:
- Update your personal story
- Modify education details

### 7. Contact Information

Edit `components/sections/Contact.tsx`:
- Update email, phone, LinkedIn, GitHub links

### 8. Resume/CV

1. Place your PDF resume in `/public/` folder as `Maurya_Sneha_DS.pdf`
2. Update the filename in navigation and quick access if different

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:
- `--accent`: Primary color (currently indigo)
- `--accent-dark`: Darker shade for hover states

### Fonts

The site uses:
- **Inter**: Body text (clean, modern)
- **Playfair Display**: Headings (elegant, serif)

Change fonts in `app/layout.tsx` if desired.

### Binary Background

Customize the binary animation in:
- `components/BinaryBackground.tsx`: Number of digits, speed, opacity
- `app/globals.css`: Animation duration and styling

## File Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Main layout with navigation
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── QuickAccess.tsx     # Floating quick access buttons
│   ├── BinaryBackground.tsx # Animated binary background
│   └── sections/
│       ├── Hero.tsx        # Hero/intro section
│       ├── About.tsx        # About me section
│       ├── Experience.tsx   # Work experience
│       ├── Projects.tsx     # Featured projects
│       ├── Blog.tsx         # Blog posts
│       ├── Gallery.tsx      # Photo gallery
│       └── Contact.tsx      # Contact information
└── public/
    ├── gallery/            # Your black and white photos go here
    └── Maurya_Sneha_DS.pdf # Your resume PDF
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Any Node.js hosting

## Tips

- **Keep it updated**: Regularly update your projects and blog posts
- **Add photos**: Personal photos make the portfolio more engaging
- **Test responsiveness**: Check on mobile, tablet, and desktop
- **Optimize images**: Compress photos before adding to gallery
- **Update regularly**: Keep experience and projects current

## Support

For questions or issues, feel free to reach out!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
