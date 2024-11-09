

import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-100 text-gray-800 p-6 md:p-12 lg:p-16 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4 md:text-4xl lg:text-5xl">
                Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 mb-8 text-center">
                Last updated: November 8, 2024
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Information Collection and Use
                </h2>
                <p className="text-base">
                    We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about us or our products, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us and may include your name, email address, contact information, and preferences.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    How We Use Your Information
                </h2>
                <p className="text-base">
                    We use the information we collect in the following ways:
                </p>
                <ul className="list-disc pl-5 mt-3">
                    <li>To provide, operate, and maintain our website</li>
                    <li>To improve and personalize our website based on your interactions</li>
                    <li>To communicate with you, either directly or through one of our partners</li>
                    <li>To process your inquiries or requests</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Data Security
                </h2>
                <p className="text-base">
                    We take data security seriously and use appropriate measures to protect your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Changes to This Privacy Policy
                </h2>
                <p className="text-base">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Contact Us
                </h2>
                <p className="text-base">
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:zakiabaig0507@gmail.com" className="text-blue-500 hover:underline">zakiabaig0507@gmail.com</a>.
                </p>
            </section>
        </div>
    );
}
