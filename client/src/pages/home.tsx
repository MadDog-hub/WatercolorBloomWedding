import { useEffect } from 'react';
import CountdownTimer from '@/components/countdown-timer';
import MusicPlayer from '@/components/music-player';
import Lightbox from '@/components/lightbox';
import FAQAccordion from '@/components/faq-accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Church, MapPin, Camera, Users, Gift, Music, Calendar, Utensils, PartyPopper } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Fade-in animation on scroll
    const observeElements = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
      });
    };

    observeElements();
  }, []);

  const galleryImages = [
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163341/gallery5_le1pl6.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163340/gallery4_kg0eyw.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163340/gallery6_bcvrjx.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163339/gallery7_j8pehj.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163339/gallery8_xwtcoh.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163339/bide_vjxwzh.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163338/gallery1_ud1bdz.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163338/gallery3_cbyvci.jpg',
    'https://res.cloudinary.com/dbiboclqa/image/upload/v1753163338/gallery2_ohl5o9.jpg'
  ];

  return (
    <div className="font-open-sans text-deep-forest bg-soft-cream">
      <MusicPlayer />
      <Lightbox />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dbiboclqa/image/upload/v1753250636/487b13ae-7e77-47e7-8744-f07461249cdc_vyaaro.png')"
          }}
        />
        <div className="absolute inset-0 watercolor-overlay floral-texture" />
        
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 relative">
              <h1 className="font-great-vibes text-6xl md:text-8xl text-deep-forest mb-4 drop-shadow-lg">
                Jovelle & Keith Paul
              </h1>
              <div className="font-dancing-script text-2xl md:text-3xl orange-peach mb-6">
                "Two Souls, One Heart"
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-8 petal-border shadow-2xl border-0">
              <CardContent className="p-0">
                <h2 className="font-great-vibes text-4xl text-deep-forest mb-4">September 18, 2025</h2>
                <div className="text-lg text-deep-forest space-y-2">
                  <p className="flex items-center justify-center">
                    <Church className="powder-pink mr-3" size={20} />
                    Ceremony & Reception at Joselito's Resort and Events Place
                  </p>
                  <p className="flex items-center justify-center">
                    <MapPin className="orange-peach mr-3" size={20} />
                    Philippines
                  </p>
                </div>
              </CardContent>
            </Card>

            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Cover Image Section */}
      <section className="py-16 relative vine-decoration">
        <div className="absolute inset-0 bg-gradient-to-br from-powder-pink/30 via-orange-peach/30 to-yellow-peach/30" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block petal-border rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250796/Colorful_Iris_farm_anniversary_session___Veronkia_Daniel_Karina_Maks_-Portland_Wedding_Photographer_PhotoGrid_udukjc.png" 
                alt="Jovelle and Keith Paul engagement photo" 
                className="w-full h-auto max-w-3xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/40 via-periwinkle/40 to-shadow-lime/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-great-vibes text-5xl text-deep-forest mb-8 fade-in">You're Invited</h2>
            
            <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 mb-8 petal-border shadow-2xl fade-in border-0">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-3xl powder-pink mb-4">"</div>
                  <p className="text-lg text-deep-forest italic leading-relaxed mb-4">
                    "For I know the plans I have for you," declares the Lord, 
                    "plans to prosper you and not to harm you, plans to give you a hope and a future."
                  </p>
                  <cite className="orange-peach font-semibold">— Jeremiah 29:11</cite>
                </div>
              </CardContent>
            </Card>

            <div className="text-lg text-deep-forest leading-relaxed fade-in">
              <p className="mb-6">
                With hearts full of joy and love, we invite you to witness and celebrate 
                the union of Jovelle Espedido and Keith Paul Sacdalan as they begin their 
                journey together as husband and wife.
              </p>
              <p className="font-dancing-script text-2xl orange-peach">
                Join us for a day of love, laughter, and happily ever after!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story/About Section */}
      <section className="py-16 relative watercolor-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-shadow-lime/30 via-baby-blue/30 to-periwinkle/30 vine-decoration" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Our Love Story</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl h-full border-0">
                  <CardContent className="p-0">
                    <h3 className="font-dancing-script text-3xl orange-peach mb-6">How We Met</h3>
                    <div className="space-y-4 text-deep-forest">
                      <p><strong>Mid-2019:</strong> Started chatting out of boredom, connected by our accidental matchmaker Albert.</p>
                      <p><strong>Early Days:</strong> Sporadic chats, occasional dates amidst work and long distance, bonding over memes, coffee, and chicken wing competitions.</p>
                      <p><strong>Growth:</strong> Love grew through Messenger, late-night calls, and check-ins, marked by intentional effort despite distance.</p>
                      <p><strong>Milestones:</strong> After two years, transitioned from casual chats to a committed relationship, with signs from God confirming our bond.</p>
                      <p><strong>Present:</strong> Stronger and sillier, still obsessed with wings and blanket fights, ready for forever on September 18, 2025.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8 fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250898/men_zi2a63.jpg" 
                        alt="Keith Paul" 
                        className="w-20 h-20 rounded-full object-cover border-4 border-powder-pink"
                      />
                      <div>
                        <h4 className="font-dancing-script text-2xl text-deep-forest">Keith Paul</h4>
                        <p className="text-deep-forest">A grounded realist with a witty charm...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250897/women_jhvgkw.jpg" 
                        alt="Jovelle" 
                        className="w-20 h-20 rounded-full object-cover border-4 border-orange-peach"
                      />
                      <div>
                        <h4 className="font-dancing-script text-2xl text-deep-forest">Jovelle</h4>
                        <p className="text-deep-forest">A graceful dreamer with a heart for art and adventure...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Our Journey</h3>
              <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-3">
                      <div className="baby-blue text-4xl">🏛️</div>
                      <h4 className="font-semibold text-deep-forest">Where We Met</h4>
                      <p className="text-deep-forest">UP Diliman</p>
                    </div>
                    <div className="space-y-3">
                      <Heart className="powder-pink text-4xl mx-auto" size={32} />
                      <h4 className="font-semibold text-deep-forest">Where We Got Engaged</h4>
                      <p className="text-deep-forest">Pampanga</p>
                    </div>
                    <div className="space-y-3">
                      <div className="orange-peach text-4xl">💍</div>
                      <h4 className="font-semibold text-deep-forest">Where We'll Marry</h4>
                      <p className="text-deep-forest">Joselito's Resort and Events Place</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Parents Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-powder-pink/40 via-yellow-peach/40 to-shadow-lime/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Messages from Our Families</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <div className="powder-pink text-4xl mb-4">💌</div>
                      <h3 className="font-dancing-script text-2xl text-deep-forest">From Jovelle's Parents</h3>
                      <p className="orange-peach font-semibold">Mr. Roberto Hernandez & Dr. Maria Hernandez</p>
                    </div>
                    <div className="text-deep-forest text-center italic">
                      <p>"We are overjoyed to welcome Keith Paul into our family. Watching Jovelle and Keith Paul's love grow has been a blessing. We pray for a lifetime of happiness, understanding, and love for both of you."</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <div className="baby-blue text-4xl mb-4">💌</div>
                      <h3 className="font-dancing-script text-2xl text-deep-forest">From Keith Paul's Parents</h3>
                      <p className="orange-peach font-semibold">Mr. Henry Lim & Mrs. Susan Lim</p>
                    </div>
                    <div className="text-deep-forest text-center italic">
                      <p>"Jovelle has brought such joy and love into Keith Paul's life. We are blessed to gain a daughter and excited to see them start this beautiful journey together. May God bless your union always."</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative watercolor-overlay vine-decoration">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Wedding Day Timeline</h2>
            <p className="text-center text-xl text-deep-forest mb-12 font-dancing-script fade-in">Joselito's Resort and Events Place</p>

            <div className="space-y-6">
              {[
                { time: '4:00 PM', event: 'Ceremony', desc: 'Join us as we exchange vows and become one', icon: Church, color: 'bg-powder-pink' },
                { time: '5:00 PM', event: 'Photos', desc: 'Capture the magical moments', icon: Camera, color: 'bg-orange-peach' },
                { time: '5:00 PM', event: 'Cocktails', desc: 'Mingle and celebrate with drinks', icon: PartyPopper, color: 'bg-baby-blue' },
                { time: '6:30 PM', event: 'Dinner & Toasts', desc: 'Feast and share in our joy', icon: Utensils, color: 'bg-periwinkle' },
                { time: '8:00 PM', event: 'Party Time', desc: 'Dance the night away', icon: Music, color: 'bg-shadow-lime' },
                { time: '9:30 PM', event: 'Send-Off', desc: 'A beautiful farewell moment', icon: Heart, color: 'bg-yellow-peach' },
                { time: '9:30 PM', event: 'After-Pool Party', desc: 'Continue the celebration', icon: PartyPopper, color: 'bg-powder-pink' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl fade-in">
                  <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-deep-forest">{item.time} - {item.event}</h3>
                    <p className="text-deep-forest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/40 via-periwinkle/40 to-powder-pink/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Dress Code</h2>
            <p className="text-center text-2xl font-dancing-script orange-peach mb-12 fade-in">"Rustic Romance"</p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-6">For the Ladies</h3>
                    <img 
                      src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250343/Bridesmaid_Inspo_l5lfez.jpg" 
                      alt="Dress code inspiration for women" 
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <div className="space-y-4 text-deep-forest">
                      <div>
                        <h4 className="font-semibold text-lg powder-pink">Recommended:</h4>
                        <p>Semi-Formal attire - Dress, Dressy Suit, Long Sleeve</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-6">For the Gentlemen</h3>
                    <img 
                      src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250343/download_d0u42w.jpg" 
                      alt="Dress code inspiration for men" 
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <div className="space-y-4 text-deep-forest">
                      <div>
                        <h4 className="font-semibold text-lg baby-blue">Recommended:</h4>
                        <p>Semi-Formal attire - Dressy Suit, Polo Jacket, Long Sleeve</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="fade-in">
              <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                <CardContent className="p-0">
                  <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Color Palette</h3>
                  
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    {[
                      { name: 'Powder Pink', class: 'bg-powder-pink' },
                      { name: 'Orange Peach', class: 'bg-orange-peach' },
                      { name: 'Yellow Peach', class: 'bg-yellow-peach' },
                      { name: 'Baby Blue', class: 'bg-baby-blue' },
                      { name: 'Periwinkle', class: 'bg-periwinkle' },
                      { name: 'Shadow Lime', class: 'bg-shadow-lime' }
                    ].map((color, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 mx-auto rounded-full ${color.class} mb-2 border-4 border-white shadow-lg`} />
                        <p className="text-sm text-deep-forest">{color.name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg text-deep-forest mb-4 text-center">
                        ❌ Please Avoid
                      </h4>
                      <ul className="space-y-2 text-deep-forest">
                        <li>• Casual wear (T-shirt, Polo Shirt, Denim)</li>
                        <li>• White, Beige, Champagne, Black colors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-deep-forest mb-4 text-center">
                        💕 We'd Love to See
                      </h4>
                      <ul className="space-y-2 text-deep-forest">
                        <li>• Pastel rainbow colors from our palette</li>
                        <li>• Semi-formal elegant attire</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 relative watercolor-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-shadow-lime/40 via-baby-blue/40 to-periwinkle/40 vine-decoration" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Venue</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-6">Ceremony</h3>
                    <img 
                      src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753251307/churchJovelle_dqh6hl.jpg" 
                      alt="Joselito's Resort ceremony venue" 
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-xl text-deep-forest">Joselito's Resort and Events Place</h4>
                      <p className="text-deep-forest">Philippines</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="fade-in">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-6">Reception</h3>
                    <img 
                      src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753251306/receptionJovelle_r5dkro.jpg" 
                      alt="Joselito's Resort reception venue" 
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-xl text-deep-forest">Joselito's Resort and Events Place</h4>
                      <p className="text-deep-forest">Philippines</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="fade-in">
              <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl text-center border-0">
                <CardContent className="p-0">
                  <h3 className="font-dancing-script text-3xl text-deep-forest mb-6">Find Us</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="text-4xl text-deep-forest mb-4 mx-auto" size={48} />
                        <p className="text-deep-forest">Interactive Google Map</p>
                        <p className="text-sm text-gray-600">Joselito's Resort and Events Place</p>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-gradient-to-r from-powder-pink to-orange-peach text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=14.14349385404%2C120.94208423727&fbclid=IwY2xjawLtXM9leHRuA2FlbQIxMABicmlkETF4clJtdmdrWXI4eVdZVm5NAR4DyzD21hazQhj_-P1X05Po8bdou_HRhx8b2SWwnUP1grvxOYTekdEILIcQXQ_aem_sIWGM9H-iJsNG0xWtIHy3A" 
                        target="_blank"
                      >
                        <MapPin className="mr-3" size={20} />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Entourage Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-powder-pink/40 via-yellow-peach/40 to-baby-blue/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Our Wedding Party</h2>

            {/* Principal Sponsors */}
            <div className="mb-12 fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Principal Sponsors</h3>
              <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="space-y-2">
                      <p className="text-deep-forest">Mr. Nataniel Tinambacan & Mrs. Emily Tinambacan</p>
                      <p className="text-deep-forest">Mr. Mario Cantada & Mrs. Rodelyn Cantada</p>
                      <p className="text-deep-forest">Mr. Herminio Sacdalan & Mrs. Ruth Sacdalan</p>
                      <p className="text-deep-forest">Mr. Joseph Brijuega & Mrs. Marissa Brijuega</p>
                      <p className="text-deep-forest">Mr. Michael Terrobias & Mrs. Ritchelda Terrobias</p>
                      <p className="text-deep-forest">Mr. Arman Paglicawan & Mrs. Delia Paglicawan</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-deep-forest">Mr. Orly Magbanua & Mrs. Imelda Pactes</p>
                      <p className="text-deep-forest">Mr. Hiroshi Suzuki & Atty. Miriam Sayaman Clorina</p>
                      <p className="text-deep-forest">Mr. Mamerto Noora Jr. & Mrs. Juliet Del Rosario</p>
                      <p className="text-deep-forest">Mr. Allan Magbanua & Mrs. Vilma Magbanua</p>
                      <p className="text-deep-forest">Mrs. Jeanie Nicolas Bustillo</p>
                      <p className="text-deep-forest">Mrs. Leonora Nicolas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Best Man & Maid of Honor */}
            <div className="mb-12 fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Best Man & Maid of Honor</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl text-center border-0">
                  <CardContent className="p-0">
                    <Users className="baby-blue text-4xl mb-4 mx-auto" size={48} />
                    <h4 className="font-semibold text-xl text-deep-forest">Best Man</h4>
                    <p className="text-deep-forest">Albert Cagas</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl text-center border-0">
                  <CardContent className="p-0">
                    <div className="powder-pink text-4xl mb-4">👰</div>
                    <h4 className="font-semibold text-xl text-deep-forest">Maid of Honor</h4>
                    <p className="text-deep-forest">Princess Espedido</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Groomsmen & Bridesmaids */}
            <div className="mb-12 fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Groomsmen & Bridesmaids</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-xl text-deep-forest text-center mb-4">Groomsmen</h4>
                    <div className="space-y-2 text-center">
                      <p className="text-deep-forest">Albert Mayores</p>
                      <p className="text-deep-forest">John Paul Ballescas</p>
                      <p className="text-deep-forest">Erwin Ratilla</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-xl text-deep-forest text-center mb-4">Bridesmaids</h4>
                    <div className="space-y-2 text-center">
                      <p className="text-deep-forest">Celize Sosa</p>
                      <p className="text-deep-forest">Marvic Andal</p>
                      <p className="text-deep-forest">Abigail Paglicawan</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Secondary Sponsors */}
            <div className="mb-12 fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Secondary Sponsors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl text-center border-0">
                  <CardContent className="p-0">
                    <div className="orange-peach text-3xl mb-3">🕯️</div>
                    <h4 className="font-semibold text-lg text-deep-forest">Candle</h4>
                    <p className="text-deep-forest text-sm">James De Vera & Ched Alconera</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl text-center border-0">
                  <CardContent className="p-0">
                    <div className="periwinkle text-3xl mb-3">👰‍♀️</div>
                    <h4 className="font-semibold text-lg text-deep-forest">Veil</h4>
                    <p className="text-deep-forest text-sm">Jerick Quial & Correne Verdida</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-6 petal-border shadow-2xl text-center border-0">
                  <CardContent className="p-0">
                    <div className="shadow-lime text-3xl mb-3">🔗</div>
                    <h4 className="font-semibold text-lg text-deep-forest">Cord</h4>
                    <p className="text-deep-forest text-sm">John-John Espedido & Pierre Angeli Blasco</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bearers & Flower Maidens */}
            <div className="fade-in">
              <h3 className="font-dancing-script text-3xl text-deep-forest text-center mb-8">Special Roles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-xl text-deep-forest text-center mb-4">Bearers</h4>
                    <div className="space-y-3 text-center">
                      <div>
                        <span className="baby-blue mr-2">📖</span>
                        <span className="text-deep-forest">Bible Bearer: Jerome Alaras</span>
                      </div>
                      <div>
                        <span className="powder-pink mr-2">💍</span>
                        <span className="text-deep-forest">Ring Bearer: Chandler Mazzie Andal</span>
                      </div>
                      <div>
                        <span className="yellow-peach mr-2">🪙</span>
                        <span className="text-deep-forest">Coin Bearer: Kheiden Jhace Sacdalan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-xl text-deep-forest text-center mb-4">Flower Maidens</h4>
                    <div className="space-y-2 text-center">
                      <p className="text-deep-forest">Peter Simon Santillan</p>
                      <p className="text-deep-forest">Aldrin Genove</p>
                      <p className="text-deep-forest">Patrick John Silvano</p>
                      <p className="text-deep-forest">Jeffrey Zaleta</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-16 relative watercolor-overlay vine-decoration">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-great-vibes text-5xl text-deep-forest mb-12 fade-in">Wedding Gifts</h2>

            <div className="fade-in">
              <Card className="bg-white/90 backdrop-blur-md rounded-3xl p-8 petal-border shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="mb-8">
                    <Heart className="powder-pink text-4xl mb-4 mx-auto" size={48} />
                    <p className="text-lg text-deep-forest leading-relaxed mb-6">
                      Your love and support are the greatest gift, but if you wish to add a little extra, 
                      a contribution to our new home fund would help us build our dream space together.
                    </p>
                  </div>

                  <div className="inline-block p-6 bg-white rounded-3xl shadow-lg">
                    <img 
                      src="https://res.cloudinary.com/dbiboclqa/image/upload/v1753250423/qr_e28rru.png" 
                      alt="Bank QR Code for monetary gifts" 
                      className="w-64 h-64 mx-auto"
                    />
                    <p className="text-deep-forest mt-4 font-semibold">Scan to send a gift</p>
                  </div>

                  <div className="mt-8">
                    <Gift className="orange-peach text-2xl mx-auto" size={32} />
                    <p className="text-deep-forest font-dancing-script text-xl mt-2">Thank you for your generosity!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/40 via-periwinkle/40 to-shadow-lime/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Our Memories</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item cursor-pointer" 
                  onClick={() => {
                    const event = new CustomEvent('openLightbox', { detail: { src: image } });
                    window.dispatchEvent(event);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Jovelle and Keith Paul memory ${index + 1}`} 
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 relative watercolor-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-powder-pink/40 via-orange-peach/40 to-yellow-peach/40 vine-decoration" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Our Pre-Wedding Story</h2>
            
            <div className="fade-in">
              <div className="petal-border rounded-3xl overflow-hidden shadow-2xl">
                <video controls className="w-full h-auto rounded-3xl">
                  <source src="https://res.cloudinary.com/dbiboclqa/video/upload/v1753163341/Zeinab_Harake_and_Ray_Parks_Jr._OSAKA_JAPAN_Pre_Wedding_Film_by_Nice_Print_amwuhx.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-baby-blue/40 via-periwinkle/40 to-shadow-lime/40" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-great-vibes text-5xl text-deep-forest text-center mb-12 fade-in">Frequently Asked Questions</h2>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 relative watercolor-overlay vine-decoration">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-great-vibes text-5xl text-deep-forest mb-8 fade-in">RSVP</h2>
            <p className="text-xl text-deep-forest mb-12 fade-in">Please let us know if you'll be joining our special day</p>

            <div className="fade-in">
              <div className="inline-block petal-border">
                <Button asChild className="px-12 py-6 bg-gradient-to-r from-powder-pink via-orange-peach to-yellow-peach text-white font-semibold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe15vjnpTmBOzz0x9c6Xg_JPyX1x7ayEoJdl1hpErcAOslXxw/viewform?usp=dialog" 
                    target="_blank"
                  >
                    <div className="mr-4 text-2xl">✉️</div>
                    RSVP Now
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-deep-forest mt-8 fade-in">We can't wait to celebrate with you!</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 relative floral-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/80 via-deep-forest/70 to-deep-forest/80" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="font-great-vibes text-4xl soft-cream mb-4">Jovelle & Keith Paul</h3>
              <p className="soft-cream text-lg">September 18, 2025</p>
            </div>

            <div className="mb-8">
              <p className="soft-cream mb-2">Share your photos with our hashtag:</p>
              <p className="font-dancing-script text-2xl powder-pink">#wePAULnallyRingTheVELLE</p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="soft-cream hover:text-powder-pink transition-colors duration-300">
                <div className="text-2xl">📘</div>
              </a>
              <a href="#" className="soft-cream hover:text-orange-peach transition-colors duration-300">
                <div className="text-2xl">📷</div>
              </a>
              <a href="#" className="soft-cream hover:text-yellow-peach transition-colors duration-300">
                <div className="text-2xl">🐦</div>
              </a>
            </div>

            <div className="text-center soft-cream">
              <p className="mb-2">For questions or inquiries:</p>
              <p>Email: jovelle.keith@wedding.com</p>
              <p>Phone: +63 XXX XXX XXXX</p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30 text-center soft-cream">
              <p>&copy; 2025 Jovelle & Keith Paul. Made with <Heart className="powder-pink mx-1 inline" size={16} /> for our special day.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
