'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { Calendar, DollarSign, Mountain, Waves, Building, Star, ArrowRight, Clock, Users, Heart, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function TravelStories() {
  const [selectedStory, setSelectedStory] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const travelStories = [
    {
      id: 1,
      title: "Where Giants Walk: My Season in the Canadian Rockies",
      category: "mountains",
      season: "Summer/Fall",
      difficulty: "Moderate",
      budget: "$$$",
      duration: "2 weeks",
      hero: "The first time I saw Moraine Lake at sunrise, I didn't just see beauty—I felt the ancient pulse of mountains that have watched over this land for millennia.",
      content: [
        {
          type: "paragraph",
          text: "The first time I saw Moraine Lake at sunrise, I didn't just see beauty—I felt the ancient pulse of mountains that have watched over this land for millennia. But the real magic happens when you venture beyond the iconic viewpoints..."
        },
        {
          type: "secret",
          title: "Local Secret",
          content: "Most visitors miss the hidden thermal springs near Banff that locals have used for generations. The water stays a perfect 38°C year-round, even when snow blankets the surrounding forest.",
          icon: <Star className="h-5 w-5" />
        },
        {
          type: "reflection",
          title: "My Reflection",
          content: "There's a profound humility that comes from standing between these granite titans. It reminded me that we're temporary guests in an ancient world—a perspective that changes how you travel everywhere.",
          icon: <Heart className="h-5 w-5" />
        },
        {
          type: "tips",
          title: "Practical Wisdom",
          tips: [
            "Visit Lake Louise in shoulder seasons (May or September) for 80% fewer crowds",
            "Book backcountry campsites 3 months in advance",
            "Download offline maps—cell service disappears in valleys",
            "Pack for all four seasons, even in summer"
          ]
        }
      ],
      image: "rockies-mountains",
      location: "Banff & Jasper National Parks"
    },
    {
      id: 2,
      title: "Atlantic Whispers: Finding Solace on Newfoundland's Rugged Shores",
      category: "coastal",
      season: "Summer",
      difficulty: "Easy",
      budget: "$$",
      duration: "10 days",
      hero: "I came to Newfoundland for the icebergs but stayed for the stories etched into every fishing village and weathered coastline. Here, time moves with the tides, not the clock...",
      content: [
        {
          type: "paragraph",
          text: "I came to Newfoundland for the icebergs but stayed for the stories etched into every fishing village and weathered coastline. Here, time moves with the tides, not the clock..."
        },
        {
          type: "secret",
          title: "Did You Know?",
          content: "The local tradition of 'screeching in' visitors involves kissing a cod and drinking rum—a ceremony I've now proudly completed! This quirky ritual dates back to WWII and represents true Newfoundlander hospitality.",
          icon: <Star className="h-5 w-5" />
        },
        {
          type: "reflection",
          title: "Heart Moment",
          content: "Sharing fresh-baked bread with a fifth-generation fisherman who showed me coves no map could ever properly capture. His family's connection to the sea spanned centuries—a reminder that some wisdom can't be Googled.",
          icon: <Heart className="h-5 w-5" />
        },
        {
          type: "tips",
          title: "Coastal Intelligence",
          tips: [
            "June is prime iceberg season along 'Iceberg Alley'",
            "Rent a car—public transport can't reach the magical outports",
            "Try the fish and chips at Ches's Famous—worth the pilgrimage",
            "Always carry cash in remote villages"
          ]
        }
      ],
      image: "newfoundland-coastal",
      location: "Newfoundland & Labrador"
    },
    {
      id: 3,
      title: "Concrete and Canopy: Discovering Toronto's Secret Green Spaces",
      category: "urban",
      season: "All Seasons",
      difficulty: "Easy",
      budget: "$",
      duration: "1 week",
      hero: "Everyone knows the CN Tower, but few discover the wild ravine system that weaves through Canada's largest city like urban arteries. I spent a month mapping the green heart beating beneath the skyscrapers...",
      content: [
        {
          type: "paragraph",
          text: "Everyone knows the CN Tower, but few discover the wild ravine system that weaves through Canada's largest city like urban arteries. I spent a month mapping the green heart beating beneath the skyscrapers..."
        },
        {
          type: "secret",
          title: "Urban Insight",
          content: "Toronto's ravine system is one of the largest urban park networks in the world—larger than Vancouver's Stanley Park, Central Park, and Golden Gate Park combined. These hidden corridors shelter deer, foxes, and over 200 bird species within city limits.",
          icon: <Star className="h-5 w-5" />
        },
        {
          type: "reflection",
          title: "Personal Discovery",
          content: "Watching a family of red foxes play in the Don Valley while the downtown skyline glowed in the distance was a powerful reminder that wilderness and civilization can coexist beautifully when we make space for both.",
          icon: <Heart className="h-5 w-5" />
        },
        {
          type: "tips",
          title: "City Smart Tips",
          tips: [
            "Explore the Beltline Trail for the best skyline views",
            "Visit the Toronto Islands on weekdays for peaceful beaches",
            "Use the PATH underground system during winter months",
            "Book restaurant reservations 2-3 weeks in advance"
          ]
        }
      ],
      image: "toronto-urban",
      location: "Toronto, Ontario"
    }
  ]

  const categories = [
    { id: "all", label: "All Stories", icon: <MapPin className="h-4 w-4" /> },
    { id: "mountains", label: "Mountains", icon: <Mountain className="h-4 w-4" /> },
    { id: "coastal", label: "Coastal", icon: <Waves className="h-4 w-4" /> },
    { id: "urban", label: "Urban", icon: <Building className="h-4 w-4" /> }
  ]

  const filteredStories = travelStories

  const renderStoryContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {item.text}
            </p>
          )
        case "secret":
          return (
            <Card key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-yellow-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-800">{item.title}</h3>
                </div>
                <p className="text-yellow-700">{item.content}</p>
              </CardContent>
            </Card>
          )
        case "reflection":
          return (
            <Card key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                </div>
                <p className="text-blue-700">{item.content}</p>
              </CardContent>
            </Card>
          )
        case "tips":
          return (
            <Card key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.tips.map((tip: string, tipIndex: number) => (
                    <li key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge variant="secondary" className="mb-4">
              Travel Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adventures Across Canada
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From hidden coastal villages to majestic mountain trails, these are the stories that shaped my understanding of Canada's soul.
            </p>
          </div>
        </div>
      </section>

      {/* Story Navigation */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Story Content */}
            <div className="lg:col-span-2">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/images/canada-attractions/${travelStories[selectedStory].image}.jpg`}
                      alt={`${travelStories[selectedStory].title} - ${travelStories[selectedStory].location}`}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline">{travelStories[selectedStory].season}</Badge>
                      <Badge variant="outline">{travelStories[selectedStory].difficulty}</Badge>
                      <Badge variant="outline">{travelStories[selectedStory].budget}</Badge>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">
                      {travelStories[selectedStory].title}
                    </h2>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{travelStories[selectedStory].location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{travelStories[selectedStory].duration}</span>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      {renderStoryContent(travelStories[selectedStory].content)}
                    </div>

                    <div className="mt-8 pt-8 border-t">
                      <p className="text-lg italic text-muted-foreground">
                        {travelStories[selectedStory].category === "mountains" && "The mountains are calling—will you answer with respect and wonder?"}
                        {travelStories[selectedStory].category === "coastal" && "Let the Atlantic winds reset your soul and recalibrate your priorities."}
                        {travelStories[selectedStory].category === "urban" && "Even in our busiest cities, nature waits patiently to welcome us home."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Story Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Story Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Best Season</span>
                      <Badge>{travelStories[selectedStory].season}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Difficulty</span>
                      <Badge variant="secondary">{travelStories[selectedStory].difficulty}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Budget</span>
                      <Badge variant="outline">{travelStories[selectedStory].budget}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{travelStories[selectedStory].duration}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Other Stories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">More Stories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {travelStories.map((story, index) => (
                      <button
                        key={story.id}
                        onClick={() => setSelectedStory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-colors ${
                          selectedStory === index 
                            ? 'bg-primary/10 border border-primary/20' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <h4 className="font-semibold mb-1 line-clamp-2">{story.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{story.location}</span>
                        </div>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Ready for Your Own Adventure?</h3>
                    <p className="text-muted-foreground mb-4">
                      Let me help you plan your perfect Canadian journey
                    </p>
                    <Button className="w-full">
                      Plan Your Trip
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Stories Coming Soon
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to get new travel stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}