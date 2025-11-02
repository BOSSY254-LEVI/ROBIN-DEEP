'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Award, BookOpen, Heart, Mountain, Users, Calendar, ArrowRight, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const timelineEvents = [
    {
      year: "Childhood",
      title: "First Adventures",
      description: "Camping trips in Algonquin Park sparked my lifelong love for Canadian wilderness",
      icon: <Mountain className="h-5 w-5" />
    },
    {
      year: "Age 19",
      title: "Life-Changing Journey",
      description: "First solo trek through the Rocky Mountains ignited my passion for exploration",
      icon: <Heart className="h-5 w-5" />
    },
    {
      year: "2018-2021",
      title: "Professional Foundation",
      description: "Senior Travel Consultant at Canadian Adventure Tours",
      icon: <Users className="h-5 w-5" />
    },
    {
      year: "2021-2023",
      title: "Content Creation",
      description: "Brand Ambassador for Parks Canada, sharing Canada's natural beauty",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      year: "Present",
      title: "Independent Expert",
      description: "Freelance Travel Writer featured in Explore Canada & Travel + Leisure",
      icon: <Award className="h-5 w-5" />
    }
  ]

  const credentials = [
    {
      title: "TICO Certified",
      description: "Travel Industry Council of Ontario Certification",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Destination Specialist",
      description: "Canadian Rockies & Maritimes Expert",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Sustainable Tourism",
      description: "TIAC Certification in Responsible Travel",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Wilderness First Aid",
      description: "80-hour certification & Leave No Trace Trainer",
      icon: <Mountain className="h-6 w-6" />
    }
  ]

  const provincesVisited = [
    "British Columbia", "Alberta", "Saskatchewan", "Manitoba", 
    "Ontario", "Quebec", "New Brunswick", "Nova Scotia", 
    "Prince Edward Island", "Newfoundland & Labrador", 
    "Yukon", "Northwest Territories", "Nunavut"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-4">
              About Robin Deep
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Story Behind the Adventures
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My love affair with Canada began with childhood camping trips in Algonquin Park, 
              but it deepened into a lifelong mission during my first solo trek through the Rockies at 19. 
              That journey sparked a passion that's taken me to every corner of this magnificent country.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Headshot Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-8">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/canada-attractions/robin-professional.jpg"
                      alt="Robin Deep - Canadian Travel Expert"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      quality={85}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold">Robin Deep</h3>
                    <p className="text-muted-foreground">Canadian Travel Expert</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-3xl font-bold mb-6">My Canadian Journey</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Complete Coverage</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Explored all 13 provinces and territories, from the rugged shores of Newfoundland 
                      to the remote wilderness of Nunavut
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Local Connections</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Built relationships with Indigenous communities, local guides, and family-owned 
                      businesses across the country
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Sustainable Focus</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Committed to responsible tourism that preserves Canada's natural and cultural heritage 
                      for future generations
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Travel Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every journey I design and every story I share
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Curiosity-Driven Exploration</h3>
                <p className="text-muted-foreground">
                  The best discoveries happen when we wander with purpose but without rigid itineraries. 
                  Leave room for unexpected magic.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Respect & Sustainability</h3>
                <p className="text-muted-foreground">
                  Partnering with Indigenous-owned tourism operators and eco-conscious businesses 
                  to ensure tourism benefits local communities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Story-First Travel</h3>
                <p className="text-muted-foreground">
                  Every landscape has a story, every community has wisdom to share. 
                  I'm here to help you listen and learn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Canadian Journey</h2>
            <p className="text-xl text-muted-foreground">
              The milestones that shaped my expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-16 flex-1">
                    <Card className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-primary">
                          {event.icon}
                        </div>
                        <Badge variant="outline">{event.year}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Canadian Credentials</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications that ensure quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {credential.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Provinces Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Corner Explored</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I've personally traveled to all 13 provinces and territories
            </p>
          </div>

          <Card className="max-w-4xl mx-auto p-8">
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {provincesVisited.map((province, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{province}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  100% Coverage • 13/13 Provinces & Territories
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Me in Celebrating Canada
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore Canada's breathtaking diversity while preserving it for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Read My Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8">
              Plan Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}