export default function Contact() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800 px-6 py-8 md:px-16 lg:px-32">
            <main className="max-w-2xl text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Contact Me
                </h1>
                <p className="text-lg md:text-xl mb-4">
                    Email: <a href="mailto:zakiabaig0507@gmail.com" className="text-blue-600 hover:underline">zakiabaig0507@gmail.com</a>
                </p>
                <p className="text-lg md:text-xl mb-4">
                    Phone: <a href="tel:+923317438989" className="text-blue-600 hover:underline">0331-7438989</a>
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                    Let's connect and discuss how I can contribute to your next project!
                </p>
            </main>
        </div>
    );
}
