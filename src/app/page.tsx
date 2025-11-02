'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import {
  Star, ArrowRight, Mail, Phone, Linkedin, Instagram, MapPin,
  Calendar, Users, Award, CheckCircle, Globe, Mountain,
  Camera, Heart, Compass, Shield, Clock, TrendingUp,
  Leaf, Snowflake, Sun, Cloud, Zap, Target
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [activeTab, setActiveTab] = useState('experiences')

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

  const stats = [
    { number: "13", label: "Provinces & Territories Explored", icon: <Globe className="h-6 w-6" /> },
    { number: "500+", label: "Hidden Gems Discovered", icon: <MapPin className="h-6 w-6" /> },
    { number: "10+", label: "Years of Expertise", icon: <Award className="h-6 w-6" /> },
    { number: "1000+", label: "Happy Travelers", icon: <Users className="h-6 w-6" /> }
  ]

  const experiences = [
    {
      title: "Northern Lights Adventure",
      location: "Yukon Territory",
      duration: "7 Days",
      difficulty: "Moderate",
      rating: 5,
      price: "$2,499",
      image: "/images/canada-attractions/aurora.jpg",
      highlights: ["Aurora viewing", "Dog sledding", "Ice fishing", "Cultural immersion"],
      season: "Winter"
    },
    {
      title: "Rocky Mountain Hiking",
      location: "Banff National Park",
      duration: "5 Days",
      difficulty: "Challenging",
      rating: 5,
      price: "$1,899",
      image: "/images/canada-attractions/rockies.jpg",
      highlights: ["Summit hikes", "Wildlife viewing", "Hot springs", "Photography"],
      season: "Summer"
    },
    {
      title: "East Coast Discovery",
      location: "Newfoundland & Labrador",
      duration: "8 Days",
      difficulty: "Easy",
      rating: 5,
      price: "$2,299",
      image: "/images/canada-attractions/newfoundland.jpg",
      highlights: ["Whale watching", "Iceberg tours", "Fishing villages", "Local cuisine"],
      season: "Summer"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "California, USA",
      rating: 5,
      text: "Robin's insights turned our Banff trip from a vacation into a life-changing experience. The hidden gems and local knowledge made all the difference in connecting with Canada's true spirit.",
      trip: "Banff Adventure",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      name: "Marcus Johnson",
      location: "London, UK",
      rating: 5,
      text: "The Northern Lights tour exceeded all expectations. Robin's connections with local Inuit guides provided authentic cultural experiences we couldn't have found elsewhere.",
      trip: "Yukon Aurora",
      image: "/images/testimonials/marcus.jpg"
    },
    {
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "From planning to execution, everything was perfect. The sustainable approach and respect for local communities made this trip truly meaningful.",
      trip: "East Coast Discovery",
      image: "/images/testimonials/elena.jpg"
    }
  ]

  const blogPosts = [
    {
      title: "The Hidden Waterfalls of Ontario",
      excerpt: "Discover 15 breathtaking waterfalls off the beaten path, from the thundering cascades of Algoma to the serene falls of the Canadian Shield.",
      readTime: "8 min read",
      category: "Nature",
      image: "/images/blog/waterfalls.jpg",
      date: "Dec 15, 2024"
    },
    {
      title: "Indigenous Tourism: A Cultural Journey",
      excerpt: "Learn about responsible travel practices and how to engage meaningfully with Indigenous communities across Canada's diverse cultures.",
      readTime: "12 min read",
      category: "Culture",
      image: "/images/blog/indigenous.jpg",
      date: "Dec 10, 2024"
    },
    {
      title: "Winter Photography Guide: Northern Lights",
      excerpt: "Master the art of aurora photography with pro tips, equipment recommendations, and the best locations across Canada's North.",
      readTime: "15 min read",
      category: "Photography",
      image: "/images/blog/aurora.jpg",
      date: "Dec 5, 2024"
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
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-4 text-sm animate-pulse bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Canadian Travel Expert • 10+ Years Experience
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-float">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Discover Canada Through
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-200 animate-gradient drop-shadow-lg">
                Local Eyes
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Beyond the Postcard: Experience the True North Like Never Before
            </p>

            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              I'm Robin Deep—your guide to Canada's most authentic adventures. From hidden coastal villages to majestic mountain trails,
              I help travelers discover the soul of this incredible nation through immersive, sustainable experiences. With over a decade
              of exploring every province and territory, I create personalized journeys that connect you with local communities,
              preserve natural beauty, and create lifelong memories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-nature-green to-nature-brown hover:from-nature-green/90 hover:to-nature-brown/90 text-white px-10 py-8 text-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="/stories">
                  Explore My Stories
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white hover:text-nature-green px-10 py-8 text-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10"
                asChild
              >
                <a href="/contact">
                  Plan Your Trip
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* About Robin Section */}
        <section className="py-16 bg-white/10 backdrop-blur-sm rounded-2xl mx-4 my-8 max-w-4xl mx-auto">
          <div className="text-center px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              My Journey as Canada's Storyteller
            </h3>
            <p className="text-gray-100 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Born and raised in Canada's diverse landscapes, I've dedicated my life to sharing the authentic stories
              of this magnificent country. From the rugged coastlines of Newfoundland to the pristine wilderness of Yukon,
              every corner holds a unique tale waiting to be discovered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                13 Provinces & Territories
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Indigenous Tourism Certified
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Sustainable Travel Expert
              </Badge>
            </div>
          </div>
        </section>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                currentSlide === index ? 'bg-white w-10 shadow-lg' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-nature-green/10 via-nature-blue/10 to-nature-brown/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-nature-green to-nature-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-nature-green mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Robin Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background nature-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-nature-green via-nature-blue to-nature-brown bg-clip-text text-transparent">
              Why Travel With My Guidance?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience Canada through the lens of someone who has lived and breathed every corner of this magnificent country
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "10+ Years Exploring",
                description: "Every province & territory extensively documented and personally experienced",
                color: "from-nature-green to-emerald-600"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Sustainable Tourism",
                description: "Certified professional committed to preserving Canada's natural beauty",
                color: "from-nature-blue to-blue-600"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Local Connections",
                description: "Coast to coast to coast network of authentic experiences",
                color: "from-nature-brown to-amber-600"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Story-Driven",
                description: "Transform trips into meaningful journeys that last a lifetime",
                color: "from-nature-gold to-yellow-600"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer border-2 hover:border-primary/20 bg-gradient-to-br from-card to-muted/20"
              >
                <CardContent className="pt-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated adventures that showcase the best of Canada's diverse landscapes and cultures
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="experiences" className="text-sm">All Experiences</TabsTrigger>
              <TabsTrigger value="summer" className="text-sm">Summer</TabsTrigger>
              <TabsTrigger value="winter" className="text-sm">Winter</TabsTrigger>
              <TabsTrigger value="cultural" className="text-sm">Cultural</TabsTrigger>
            </TabsList>

            <TabsContent value="experiences" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {experiences.map((experience, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-64">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-black">
                          {experience.season}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                          {[...Array(experience.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                          <p className="text-muted-foreground flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {experience.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{experience.price}</div>
                          <div className="text-sm text-muted-foreground">{experience.duration}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <Badge variant={experience.difficulty === 'Easy' ? 'secondary' : experience.difficulty === 'Moderate' ? 'default' : 'destructive'}>
                          {experience.difficulty}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.highlights.map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" size="lg">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="summer" className="space-y-8">
              <div className="text-center py-12">
                <Sun className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Summer Adventures</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience Canada's vibrant summer season with hiking, kayaking, and coastal explorations
                  from June to September.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="winter" className="space-y-8">
              <div className="text-center py-12">
                <Snowflake className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Winter Expeditions</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover the magic of Canada's winter wonderland with aurora viewing, dog sledding,
                  and ice-based adventures.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="cultural" className="space-y-8">
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Cultural Journeys</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Immerse yourself in Canada's rich Indigenous cultures and diverse communities
                  through authentic, respectful experiences.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive travel planning and consulting services tailored to your Canadian adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="h-12 w-12" />,
                title: "Custom Itineraries",
                description: "Personalized travel plans designed around your interests, budget, and schedule",
                features: ["Tailored routing", "Activity selection", "Budget planning", "Local insights"]
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Small Group Tours",
                description: "Intimate group experiences with like-minded travelers in stunning locations",
                features: ["8-12 participants", "Expert leadership", "Cultural immersion", "Sustainable focus"]
              },
              {
                icon: <Camera className="h-12 w-12" />,
                title: "Photography Tours",
                description: "Capture Canada's beauty with professional photography guidance and workshops",
                features: ["Pro techniques", "Best locations", "Post-processing tips", "Portfolio development"]
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Travel Consulting",
                description: "Expert advice on destinations, timing, and preparation for your Canadian trip",
                features: ["Destination guidance", "Seasonal planning", "Safety briefings", "Local recommendations"]
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Speaking Engagements",
                description: "Inspiring presentations about Canadian travel, culture, and sustainable tourism",
                features: ["Corporate events", "Travel clubs", "Educational seminars", "Photography workshops"]
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Sustainable Tourism",
                description: "Environmentally conscious travel that supports local communities and conservation",
                features: ["Eco-friendly options", "Community support", "Conservation focus", "Leave no trace"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-nature-green to-nature-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="text-left space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-nature-green/5 via-nature-blue/5 to-nature-brown/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Traveler Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from travelers who've discovered Canada through my guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-muted/20">
                <CardContent>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nature-green to-nature-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <Badge variant="outline" className="mt-1">{testimonial.trip}</Badge>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
            {/* Additional Testimonial */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-muted/20">
              <CardContent>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-nature-green to-nature-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MJ
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Johnson</h4>
                    <p className="text-sm text-muted-foreground">Toronto, Canada</p>
                    <Badge variant="outline" className="mt-1">Prairie Discovery</Badge>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "Robin's knowledge of Canada's Indigenous cultures transformed our family trip. The respectful approach
                  and authentic connections made this more than just travel—it was cultural immersion at its finest."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Stories & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Canada's hidden gems and travel wisdom through my latest articles and photography
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            {/* Additional Blog Post */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/blog/sustainable.jpg"
                  alt="Sustainable Tourism in Canada"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Sustainability
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  Dec 8, 2024
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  10 min read
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  Leave No Trace: Sustainable Travel Practices
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Discover how responsible tourism preserves Canada's wilderness while creating meaningful experiences
                  for future generations of travelers.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/stories">
                View All Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-nature-green via-nature-blue to-nature-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 nature-pattern opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Exclusive Canada Travel Tips
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join my weekly newsletter for insider secrets, seasonal guides, and authentic travel stories
            delivered straight to your inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubscribing}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm h-14 text-lg"
            />
            <Button
              variant="secondary"
              size="lg"
              className="px-10 py-4 text-lg bg-white text-nature-green hover:bg-white/90 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
              type="submit"
              disabled={isSubscribing}
            >
              {isSubscribing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-nature-green mr-3"></div>
                  Subscribing...
                </>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </form>
          {isSubscribed && (
            <div className="mt-6 text-green-200 animate-fade-in bg-green-500/20 rounded-full px-6 py-3 inline-block backdrop-blur-sm">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-nature-green/90 via-nature-blue/90 to-nature-brown/90 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 nature-pattern opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-nature-green" />
                </div>
                <span className="font-bold text-2xl">Robin Deep</span>
              </div>
              <p className="text-white/90 mb-6 text-lg leading-relaxed max-w-md">
                Your trusted guide to authentic Canadian adventures. Discover the True North through local eyes,
                sustainable experiences, and unforgettable stories.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:contact@robindeep.com" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/robindeep" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/discovercanadawithrobin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="https://robin-deep.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-nature-green font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Visit Live Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Travel Stories</a></li>
                <li><a href="#career" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-white/80">
                <li>Custom Itineraries</li>
                <li>Small Group Tours</li>
                <li>Travel Consulting</li>
                <li>Speaking Engagements</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/70">&copy; 2025 Robin Deep. All rights reserved. | Sustainable Tourism Certified</p>
          </div>
        </div>
      </footer>
    </div>
  )
}