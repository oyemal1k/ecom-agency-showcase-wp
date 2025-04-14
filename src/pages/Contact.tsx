
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import BookingSection from '@/components/BookingSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-agency-purple/10 to-agency-blue/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agency-black mb-6">Contact Us</h1>
              <p className="text-lg text-agency-gray mb-8">
                Have questions about our WordPress e-commerce services? Ready to start a project? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
