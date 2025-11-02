'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Star, ArrowRight, Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const heroSlides = [
    {
      title: "Northern Lights Over Yukon",
      subtitle: "Where the sky dances with ancient magic",
      gradient: "from-purple-900 via-blue-900 to-indigo-900"
    },
    {
      title: "Kayaking in Haida Gwaii",
      subtitle: "Sacred waters where nature tells its stories",
      gradient: "from-teal-900 via-cyan-900 to-blue-900"
    },
    {
      title: "Toronto at Golden Hour",
      subtitle: "Urban wilderness meets modern sophistication",
      gradient: "from-orange-900 via-red-900 to-pink-900"
    },
    {
      title: "Rocky Mountain Summit",
      subtitle: "Standing where giants walk and dreams take flight",
      gradient: "from-emerald-900 via-green-900 to-teal-900"
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubscribing(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubscribing(false)
    setIsSubscribed(true)
    setEmail('')
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/canada-attractions/waterfall-hero.jpg"
            alt="Canadian waterfall landscape"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-4 text-sm animate-pulse">
              Canadian Travel Expert • 10+ Years Experience
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Discover Canada Through
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200 animate-gradient">
                Local Eyes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Beyond the Postcard: Experience the True North Like Never Before
            </p>
            
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              I'm Robin Deep—your guide to Canada's most authentic adventures. From hidden coastal villages to majestic mountain trails,
              I help travelers discover the soul of this incredible nation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                asChild
              >
                <a href="/stories">
                  Explore My Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/contact">
                  Plan Your Trip
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Travel With Robin Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Travel With My Guidance?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience Canada through the lens of someone who has lived and breathed every corner of this magnificent country
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "10+ Years Exploring",
                description: "Every province & territory extensively documented and personally experienced"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Sustainable Tourism",
                description: "Certified professional committed to preserving Canada's natural beauty"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Local Connections",
                description: "Coast to coast to coast network of authentic experiences"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Story-Driven",
                description: "Transform trips into meaningful journeys that last a lifetime"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                "Robin's insights turned our Banff trip from a vacation into a life-changing experience. 
                The hidden gems and local knowledge made all the difference."
              </blockquote>
              <cite className="text-lg font-semibold">Sarah M., Repeat Traveler</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Exclusive Canada Travel Tips
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join my weekly newsletter for insider secrets, seasonal guides, and authentic travel stories
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubscribing}
            />
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8"
              type="submit"
              disabled={isSubscribing}
            >
              {isSubscribing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
          {isSubscribed && (
            <div className="mt-4 text-green-200 animate-fade-in">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Robin Deep</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted guide to authentic Canadian adventures
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#stories" className="hover:text-primary transition-colors">Travel Stories</a></li>
                <li><a href="#career" className="hover:text-primary transition-colors">Career</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Custom Itineraries</li>
                <li>Small Group Tours</li>
                <li>Travel Consulting</li>
                <li>Speaking Engagements</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                robindeepgill681@gmail.com
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Robin Deep. All rights reserved. | Sustainable Tourism Certified</p>
          </div>
        </div>
      </footer>
    </div>
  )
}