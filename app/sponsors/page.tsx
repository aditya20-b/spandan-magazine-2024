// app/sponsors/page.tsx
import Image from 'next/image';

export default function SponsorsPage() {
  return (
    <main className="bg-gray-100 min-h-screen p-8 space-y-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800">Our Sponsors</h1>
        <p className="mt-6 text-lg">We’re grateful to our sponsors for their support!</p>
      </section>

      {/* Title Sponsor */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-500 p-8 rounded-lg shadow-2xl text-center animate-bounce-slow">
        <h2 className="text-4xl font-extrabold text-white mb-4">Title Sponsor</h2>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <Image src="/sponsors/title-sponsor-logo.png" alt="Title Sponsor Logo" width={250} height={120} className="mx-auto" />
        </a>
        <p className="mt-6 text-xl text-white">Presented by our Title Sponsor</p>
      </section>

      {/* Associate Sponsor */}
      <section className="bg-gradient-to-r from-purple-400 to-blue-500 p-6 rounded-lg shadow-xl text-center animate-pulse">
        <h2 className="text-3xl font-bold text-white mb-4">Associate Sponsor</h2>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <Image src="/sponsors/associate-sponsor-logo.png" alt="Associate Sponsor Logo" width={220} height={100} className="mx-auto" />
        </a>
        <p className="mt-4 text-lg text-white">Thank you to our Associate Sponsor</p>
      </section>

      {/* Content Partner */}
      <section className="bg-gradient-to-r from-teal-400 to-green-500 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">Content Partner</h2>
        <Image src="/sponsors/content-partner-logo.png" alt="Content Partner Logo" width={200} height={90} className="mx-auto" />
        <p className="mt-4 text-lg text-white">In collaboration with our Content Partner</p>
      </section>

      {/* Platinum Sponsor */}
      <section className="bg-gradient-to-r from-gray-500 to-gray-700 p-5 rounded-lg shadow-md text-center text-gray-200">
        <h2 className="text-3xl font-semibold mb-3">Platinum Sponsor</h2>
        <Image src="/sponsors/platinum-sponsor-logo.png" alt="Platinum Sponsor Logo" width={200} height={90} className="mx-auto" />
        <p className="mt-3">Featured Platinum Sponsor</p>
      </section>

      {/* Gold Sponsor */}
      <section className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-4 rounded-lg shadow-md text-center text-yellow-900">
        <h2 className="text-2xl font-semibold mb-2">Gold Sponsor</h2>
        <Image src="/sponsors/gold-sponsor-logo.png" alt="Gold Sponsor Logo" width={180} height={80} className="mx-auto" />
        <p className="mt-2">Our Gold Sponsor</p>
      </section>

      {/* Sidebar Sponsor */}
      <section className="bg-blue-600 p-4 rounded-lg shadow-md text-center text-white">
        <h2 className="text-xl font-semibold mb-2">Sidebar Sponsor</h2>
        <Image src="/sponsors/sidebar-sponsor-logo.png" alt="Sidebar Sponsor Logo" width={180} height={80} className="mx-auto" />
        <p className="mt-2">Supported by our Sidebar Sponsor</p>
      </section>

      {/* Support Sponsor */}
      <section className="bg-gray-300 p-4 rounded-lg shadow text-center text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Support Sponsor</h2>
        <Image src="/sponsors/support-sponsor-logo.png" alt="Support Sponsor Logo" width={160} height={70} className="mx-auto" />
        <p className="mt-2">Support provided by our Support Sponsor</p>
      </section>

      {/* Update Sponsor */}
      <section className="bg-purple-600 p-4 rounded-lg shadow text-center text-white">
        <h2 className="text-xl font-semibold mb-2">Update Sponsor</h2>
        <Image src="/sponsors/update-sponsor-logo.png" alt="Update Sponsor Logo" width={160} height={70} className="mx-auto" />
        <p className="mt-2">Updates brought to you by our Update Sponsor</p>
      </section>

      {/* Community Sponsor */}
      <section className="bg-gray-800 p-4 rounded-lg shadow text-center text-white">
        <h2 className="text-xl font-semibold mb-2">Community Sponsor</h2>
        <Image src="/sponsors/community-sponsor-logo.png" alt="Community Sponsor Logo" width={150} height={65} className="mx-auto" />
        <p className="mt-2">Our Community Sponsors</p>
      </section>
    </main>
  );
}
