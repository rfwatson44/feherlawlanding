import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jimmy Turcios",
    quote:
      "Thanks you Law firm is Helpful. One of Gizi Bilingual workers helped me very Good. They keep the Questions understandable and Very Simple to Reply. Your office Law firm is a 10 Rating.",
    rating: 5,
  },
  {
    name: "Ronald Stayer",
    quote:
      "I want to tell you these people jump through hoops too take care of you !! They call you and or text you every step of the way making sure you receive the best care and check on you too ensure your",
    rating: 5,
  },
  {
    name: "Aria Fadakar",
    quote:
      "Tom Feher and his team are excellent litigators and trial attorneys. I've had the privilege of working with them side by side on multiple cases. As a result of that, I have seen the inner workings of",
    rating: 5,
  },
  {
    name: "Madelin Machado",
    quote:
      "Their office diligently assisted in a stressful situation by handling the case from beginning to end. Made a bad situation better as I focused on myself instead, highly recommend their firm.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e509a] to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client <span className="text-blue-200">Reviews</span>
          </h2>
          <p className="text-xl text-blue-100">What our clients say about us</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600 text-sm">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
