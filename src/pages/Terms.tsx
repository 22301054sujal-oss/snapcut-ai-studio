const Terms = () => (
  <main className="bg-section py-16">
    <div className="container max-w-3xl">
      <h1 className="mb-8 font-display text-4xl font-bold text-foreground">Terms of Service</h1>
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">1. Service Description</h2>
          <p>SnapCut AI provides AI-powered background removal for images. The service is provided "as is" and we make no guarantees about processing accuracy for all image types.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">2. Usage Limits</h2>
          <p>Free users are limited to 5 images per day. Paid plans have higher limits as described on our pricing page. Abuse of the service may result in account suspension.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">3. Payments</h2>
          <p>Subscriptions are billed monthly via Razorpay. Credit packs are one-time purchases. Refunds are handled on a case-by-case basis within 7 days of purchase.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">4. Content Policy</h2>
          <p>You must not upload illegal, harmful, or copyrighted content. We reserve the right to refuse processing of any image at our discretion.</p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-xl font-semibold text-foreground">5. Liability</h2>
          <p>SnapCut AI is not liable for any damages arising from use of the service, including but not limited to data loss or processing errors.</p>
        </section>
      </div>
    </div>
  </main>
);

export default Terms;
