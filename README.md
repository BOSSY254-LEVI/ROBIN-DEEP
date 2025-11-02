# Robin Deep - Canadian Travel Expert

A modern, high-performance Next.js website showcasing Canada's natural beauty and authentic travel experiences. Built with cutting-edge technologies for optimal user experience and SEO.

## 🌟 Features

- **Stunning Visuals**: High-quality images of Canada's most breathtaking destinations
- **Performance Optimized**: Next.js Image optimization, lazy loading, and modern web standards
- **Responsive Design**: Seamless experience across all devices
- **SEO Optimized**: Meta tags, structured data, and performance best practices
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components

## 🚀 Live Demo

Visit [robindeep.ca](https://robindeep.ca) to explore Canada's hidden gems through authentic travel stories.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: Prisma with PostgreSQL
- **Real-time**: Socket.IO
- **Deployment**: Docker + Custom server setup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/robindeep/robin-deep-travel.git
   cd robin-deep-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── career/         # Career/Experience page
│   │   ├── contact/        # Contact page
│   │   ├── stories/        # Travel stories page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── SmoothScroll.tsx # Smooth scrolling utility
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   │   ├── db.ts          # Database configuration
│   │   ├── socket.ts      # Socket.IO setup
│   │   └── utils.ts       # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
│   ├── images/            # Optimized images
│   └── robots.txt         # SEO configuration
├── prisma/                # Database schema
├── server.ts              # Custom server with Socket.IO
└── next.config.ts         # Next.js configuration
```

## 🎨 Design Philosophy

This website embodies the essence of Canadian travel - authentic, sustainable, and deeply connected to nature. The design prioritizes:

- **Visual Storytelling**: High-quality photography that captures Canada's diverse landscapes
- **Performance**: Optimized loading times and smooth interactions
- **Accessibility**: Inclusive design that works for everyone
- **Sustainability**: Eco-friendly practices reflected in both content and technology choices

## 🌍 Travel Expertise

Robin Deep is a certified Canadian travel expert with:

- **TICO Certification**: Professional travel consultant licensing
- **13 Provinces & Territories**: Personal exploration of all Canadian regions
- **Sustainable Tourism**: TIAC certification in responsible travel practices
- **Wilderness Expertise**: 80-hour wilderness first responder certification
- **Media Recognition**: Featured in Explore Canada and Travel + Leisure

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Automatic WebP/AVIF conversion and responsive sizing
- **Bundle Size**: Efficient code splitting and tree shaking

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations

### Environment Variables

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## 🚀 Deployment

### Docker Deployment

1. **Build the image**
   ```bash
   docker build -t robin-deep-travel .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 robin-deep-travel
   ```

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm run start
   ```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Robin Deep**
- Email: robindeepgill681@gmail.com
- Website: [robindeep.ca](https://robindeep.ca)
- LinkedIn: [Robin Deep](https://linkedin.com/in/robindeep)

---

*Experience Canada's natural beauty through authentic travel stories and sustainable adventures.*
