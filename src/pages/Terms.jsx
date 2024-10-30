import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../assets/Terms.css'

export default function Terms() {

  return (
    <main>
        <Nav />
        <article className='main'>
            <div>
                <h1>Privacy Policy</h1>
                <h4>Effective Date: 30th Oct 2024</h4>
            </div>
            <br />
            <p>
                At Elite Auto Aesthetics, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our services, interact with our website, or communicate with us.
            </p>
            <br />
            <h3>Information We Collect</h3>
                <p><h4 className='strong'>Personal Information:</h4> We may collect personal details, such as your name, phone number, email address, and vehicle information, when you make inquiries or book services.</p>
                <p><h4 className='strong'>Usage Data:</h4> We gather information on how you interact with our website, including pages viewed and access times, to improve your browsing experience and enhance our service offerings.</p>

            <h3>How We Use Your Information</h3>
                <p><h4 className='strong'>Service Provision:</h4> Your personal data enables us to deliver the services you request, schedule appointments, and communicate effectively about your bookings.</p>
                <p><h4 className='strong'>Customer Support:</h4> We may use your contact details to provide support, answer inquiries, and address any issues related to our services.</p>
                <p><h4 className='strong'>Improvement and Marketing:</h4> Usage data helps us improve our website and marketing efforts. If you consent, we may occasionally send you updates or promotional offers related to our services.</p>

            <h3>How We Share Your Information</h3>
                <p><h4 className='strong'>Third-Party Service Providers:</h4> We may share information with trusted third-party providers that assist us in operating our business, such as payment processors or booking software, with strict confidentiality agreements in place.</p>
                <p><h4 className='strong'>Legal Requirements:</h4> We may disclose personal information if required by law or in response to a lawful request by public authorities.</p>

            <h3>Data Security</h3>
                <p>We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse. Our website uses encryption protocols to secure information transmission and limits access to data strictly to employees and trusted third parties.</p>

            <h3>Your Privacy Choices</h3>
                <p><h4 className='strong'>Access and Update:</h4> You may request access to, or updates on, the personal data we hold about you. To make such requests, please contact us directly.</p>
                <p><h4 className='strong'>Opt-Out of Marketing Communications:</h4> If you prefer not to receive promotional messages, you may opt out by following the unsubscribe instructions in any marketing email or by contacting us directly.</p>

            <h3>Cookies and Tracking</h3>
                <p>We may use cookies and similar tracking technologies to enhance your website experience and gather usage data. You can control your cookie preferences through your browser settings.</p>

            <h3>Links to Other Websites</h3>
                <p>Our website may contain links to third-party sites not governed by this Privacy Policy. We are not responsible for the privacy practices of these websites, and we encourage you to review their policies.</p>

            <h3>Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on this page, with a revised "Effective Date" at the top.</p>

        </article>
        <Footer />
    </main>
  )
}
