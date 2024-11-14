'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Play, Info, Plus, ThumbsUp, ChevronRight } from 'lucide-react'
import {ScrollArea} from "@/components/ui/scroll-area";

export default function WeddingInvitationDetail() {
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false)
  const [wishName, setWishName] = useState('')
  const [wishMessage, setWishMessage] = useState('')

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setWishName('')
    setWishMessage('')
  }

  const wishes = [
    { name: "Emma Thompson", message: "Wishing you a lifetime of love and happiness!" },
    { name: "Michael Chen", message: "Congratulations! May your love story continue to inspire us all." },
    { name: "Sophia Rodriguez", message: "Here's to a beautiful beginning of your forever. Cheers!" },
    { name: "David Kim", message: "So happy for you both! Can't wait to celebrate with you!" },
    { name: "Olivia Parker", message: "May your love grow stronger with each passing day. Congrats!" },
    { name: "Olivia Peter", message: "May your love grow stronger with each passing day. Congrats!" },
    { name: "Daniel", message: "May your love grow stronger with each passing day. Congrats!" },
    { name: "Kim", message: "May your love grow stronger with each passing day. Congrats!" },
  ]


  return (
      <div className="min-h-screen px-8 bg-black text-white">
        <div className="relative h-[56.25vw] bg-[url('https://placehold.co/1080x1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          {isTrailerPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Wedding Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
              </div>
          ) : (
              <div
                  className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="w-full max-w-xl space-y-2 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    Sarah & John&#39;s Wedding
                  </h1>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">2024</Badge>
                    <Badge variant="secondary">Romantic</Badge>
                    <Badge variant="secondary">1 Day</Badge>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    Join us for a celebration of love, laughter, and happily ever after. Sarah and John invite you to be
                    part of their special day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button
                        className="w-full sm:w-auto bg-white text-black hover:bg-gray-200"
                        onClick={() => setIsTrailerPlaying(true)}
                    >
                      <Play className="mr-2 h-4 w-4"/> Play Trailer
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <Info className="mr-2 h-4 w-4"/> More Info
                    </Button>
                  </div>
                </div>
              </div>
          )}
        </div>

        <div className="p-8 space-y-12">
          <div className="flex items-center space-x-4">
            <ThumbsUp className="h-6 w-6"/>
            <Plus className="h-6 w-6"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-4">About Sarah & John&#39;s Wedding</h2>
              <p className="text-gray-300 mb-4">
                Sarah and John met in a coffee shop five years ago. Since then, their love has blossomed into a
                beautiful relationship. Now, they&#39;re ready to take the next step and invite you to witness their union.
              </p>
              <div className="text-gray-400">
                <p><span className="text-gray-200">Starring:</span> Sarah Johnson, John Smith</p>
                <p><span className="text-gray-200">Genres:</span> Romance, Comedy, Drama</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <p className="text-gray-300 mb-2"><span className="text-gray-200">Date:</span> June 15, 2024</p>
              <p className="text-gray-300 mb-2"><span className="text-gray-200">Time:</span> 3:00 PM</p>
              <p className="text-gray-300 mb-2"><span className="text-gray-200">Venue:</span> Sunset Beach Resort</p>
              <p className="text-gray-300 mb-2"><span className="text-gray-200">Dress Code:</span> Beach Formal</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Bride and Groom</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800">
                <CardContent className="p-6 flex flex-col items-center">
                  <Image src="https://eu.ui-avatars.com/api/?name=John+Doe&size=300" alt="Sarah" width={200} height={200} className="rounded-full mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Sarah Johnson</h3>
                  <p className="text-center text-gray-300">A passionate artist with a heart of gold. Sarah loves painting, hiking, and making people smile.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800">
                <CardContent className="p-6 flex flex-col items-center">
                  <Image src="https://eu.ui-avatars.com/api/?name=John+Doe&size=300" alt="John" width={200} height={200} className="rounded-full mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">John Smith</h3>
                  <p className="text-center text-gray-300">A tech enthusiast and nature lover. John enjoys coding, photography, and exploring new places.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Love Story</h2>
            <div className="space-y-8">
              {['First Meet', 'First Date', 'Proposal'].map((episode, index) => (
                  <Card key={episode} className="bg-gray-800">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">Episode {index + 1}: {episode}</h3>
                      <p className="text-gray-300 mb-4">A beautiful chapter in Sarah and John&#39;s love story. Filled with laughter, surprises, and unforgettable moments.</p>
                      <Button variant="secondary">
                        Watch Episode <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12].map((img) => (
                  <Image key={img} src={`https://baconmockup.com/250/250/`} alt={`Gallery image ${img}`} width={300} height={300} className="rounded-lg hover:opacity-75 transition-opacity" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Wish List</h2>
              <Card className="bg-gray-800">
                <CardContent className="p-6">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {wishes.map((wish, index) => (
                          <Card key={index} className="bg-gray-700">
                            <CardContent className="p-4">
                              <h4 className="font-semibold mb-2">{wish.name}</h4>
                              <p className="text-gray-300">{wish.message}</p>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Wish the Couple</h2>
              <Card className="bg-gray-800">
                <CardContent className="p-6">
                  <form onSubmit={handleWishSubmit} className="space-y-4">
                    <Input
                        placeholder="Your Name"
                        value={wishName}
                        onChange={(e) => setWishName(e.target.value)}
                        className="bg-gray-700 text-white"
                    />
                    <Textarea
                        placeholder="Your Message"
                        value={wishMessage}
                        onChange={(e) => setWishMessage(e.target.value)}
                        className="bg-gray-700 text-white"
                    />
                    <Button type="submit">Send Wish</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <footer className="p-8 text-center text-gray-500">
          <p>&copy; 2024 Sarah & John&#39;s Wedding. All rights reserved.</p>
        </footer>
      </div>
  )
}