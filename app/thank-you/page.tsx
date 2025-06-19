export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-16">
        <h1 className="text-3xl font-bold mb-4 text-[#1e509a] text-center">Thank You!</h1>
        <p className="text-gray-700 text-center mb-6">We appreciate you taking the time to complete our case evaluation form.<br />A member of our team will be in touch with you soon.</p>
        <div className="flex justify-center">
          <a href="/" className="text-[#1e509a] hover:underline">Return Home</a>
        </div>
      </div>
    </div>
  );
}
