import { Link } from "react-router";
import { Instagram, Github, Utensils, Mail, Phone } from 'lucide-react'

export default function Fotter() {
  return (
    <footer className="bg-orange-100 text-orange-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Utensils className="h-8 w-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hint/xx Bites</h3>
            <p className="text-sm text-center md:text-left">Serving delicious meals since 2010</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:info@tastybites.com" className="text-sm hover:underline">jaskirattt1@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+1234567890" className="text-sm hover:underline">+91 8860327174</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://www.instagram.com/code_with_hintxx/" className="hover:text-orange-600 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://github.com/JaskiratSingh26?tab=repositories" className="hover:text-orange-600 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hint/xx Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

