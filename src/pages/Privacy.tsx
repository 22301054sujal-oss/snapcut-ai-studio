const Privacy = () => (
  <main className="bg-section py-16">
    <div className="container max-w-3xl">
      <h1 className="mb-8 font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">1. Data Collection</h2>
          <p>We collect only the minimum data required to provide our service: your email address, account preferences, and uploaded images for processing.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">2. Image Storage</h2>
          <p>All uploaded and processed images are stored temporarily and automatically deleted within 24 hours. We do not retain any permanent copies of your images.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">3. Data Security</h2>
          <p>We use industry-standard encryption and security measures to protect your data. API keys and sensitive information are stored server-side only.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">4. Third-Party Services</h2>
          <p>We use third-party services for image processing, payment handling (Razorpay), and temporary storage (Cloudinary). Each service has its own privacy policy.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">5. Your Rights</h2>
          <p>You may request deletion of your account and associated data at any time by contacting our support team.</p>
        </section>
      </div>
    </div>
  </main>
);

export default Privacy;
