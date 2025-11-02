'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Award, BookOpen, Users, Target, TrendingUp, Calendar, Star, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Career() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedVision, setSelectedVision] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const education = [
    {
      degree: "Bachelor of Tourism Management",
      institution: "Thompson Rivers University",
      year: "2014-2018",
      description: "Specialized in Sustainable Tourism and Destination Management"
    },
    {
      degree: "TICO Certification",
      institution: "Travel Industry Council of Ontario",
      year: "2018",
      description: "Professional travel consultant certification"
    },
    {
      degree: "Destination Specialist",
      institution: "Canadian Tourism College",
      year: "2019",
      description: "Canadian Geography & Culture Expert"
    },
    {
      degree: "Sustainable Tourism Advisor",
      institution: "Tourism Industry Association of Canada",
      year: "2020",
      description: "Certification in Responsible Travel Practices"
    },
    {
      degree: "Wilderness First Responder",
      institution: "Wilderness Medical Associates",
      year: "2021",
      description: "80-hour certification for remote travel safety"
    }
  ]

  const experience = [
    {
      title: "Senior Travel Consultant",
      company: "Canadian Adventure Tours",
      period: "2018-2021",
      description: "Led custom itinerary design for high-end clients across Canada",
      achievements: [
        "Increased client satisfaction by 45%",
        "Developed 50+ unique Canadian itineraries",
        "Trained 5 junior consultants"
      ]
    },
    {
      title: "Content Creator & Brand Ambassador",
      company: "Parks Canada",
      period: "2021-2023",
      description: "Created engaging content promoting Canada's national parks and historic sites",
      achievements: [
        "Reached 2M+ social media impressions",
        "Produced 100+ educational videos",
        "Collaborated with Indigenous tourism partners"
      ]
    },
    {
      title: "Freelance Travel Writer",
      company: "Various Publications",
      period: "2023-Present",
      description: "Featured writer for Explore Canada, Travel + Leisure, and other major publications",
      achievements: [
        "Published 30+ feature articles",
        "Won 'Best Canadian Travel Story' award 2023",
        "Speaking engagements at travel conferences"
      ]
    }
  ]

  const vision = [
    {
      year: "Year 1-2",
      title: "Canada Beyond Digital Platform",
      description: "Launch interactive trip planning tools with AI-powered recommendations",
      progress: 25,
      milestones: [
        "Platform development",
        "Content library creation",
        "Beta testing with travel community"
      ]
    },
    {
      year: "Year 3",
      title: "Book Series Publication",
      description: "Publish 'The Conscious Canadian Traveler' guidebook series",
      progress: 10,
      milestones: [
        "Research and writing",
        "Photography collection",
        "Publisher partnership"
      ]
    },
    {
      year: "Year 4-5",
      title: "Indigenous Tourism Partnerships",
      description: "Develop partnership programs with Indigenous tourism associations",
      progress: 5,
      milestones: [
        "Community relationship building",
        "Cultural competency training",
        "Sustainable partnership models"
      ]
    },
    {
      year: "Ongoing",
      title: "Mentorship Program",
      description: "Mentor the next generation of sustainable travel professionals",
      progress: 40,
      milestones: [
        "Mentorship curriculum",
        "Online training platform",
        "Industry partnerships"
      ]
    }
  ]

  const skills = [
    { name: "Destination Expertise", level: 95 },
    { name: "Sustainable Tourism", level: 90 },
    { name: "Content Creation", level: 85 },
    { name: "Public Speaking", level: 80 },
    { name: "Business Development", level: 75 },
    { name: "Digital Marketing", level: 70 }
  ]

  const mediaFeatures = [
    { publication: "Travel + Leisure", logo: "T+L", featured: "Best Canadian Adventures 2023" },
    { publication: "Explore Canada", logo: "EC", featured: "Cover Story: Rocky Mountain Secrets" },
    { publication: "CBC Travel", logo: "CBC", featured: "Expert Panel: Sustainable Tourism" },
    { publication: "National Geographic", logo: "NG", featured: "Canada's Hidden Gems" }
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
              Career & Professional Vision
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Career Around Canadian Exploration
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My path hasn't been linear, but every step has deepened my connection to this land 
              and my ability to share it meaningfully with others.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Credentials</h2>
            <p className="text-xl text-muted-foreground">
              The foundation that supports my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{edu.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Experience</h2>
            <p className="text-xl text-muted-foreground">
              Professional journey through Canada's tourism landscape
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-primary mb-1">{exp.company}</p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-4 md:mt-0">
                      {exp.period.includes('Present') ? 'Current' : 'Completed'}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
            <p className="text-xl text-muted-foreground">
              Core competencies that drive my success
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Year Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My 5-Year Vision</h2>
            <p className="text-xl text-muted-foreground">
              Shaping Canadian Tourism's Future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vision.map((item, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedVision === index ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedVision(index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{item.year}</Badge>
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>

                  {selectedVision === index && (
                    <div className="space-y-2 pt-4 border-t">
                      <h4 className="font-semibold text-sm">Key Milestones:</h4>
                      {item.milestones.map((milestone, mileIndex) => (
                        <div key={mileIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Features</h2>
            <p className="text-xl text-muted-foreground">
              Recognized by leading travel publications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{feature.logo}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.publication}</h3>
                  <p className="text-sm text-muted-foreground">{feature.featured}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Core Philosophy
          </h2>
          <p className="text-xl leading-relaxed mb-8 opacity-90">
            I believe Canada's tourism future lies in depth, not distance—in meaningful connections 
            rather than checklist tourism. Every journey should leave both the traveler and the destination 
            better than they were before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Read My Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8">
              Collaborate With Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}