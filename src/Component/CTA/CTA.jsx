const CTA = () => {
    return (
        <section className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-20 px-6 text-center">

            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready To Transform Your Workflow?
                </h2>

                {/* Description */}
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-7">

                    <button className="px-6 py-3 rounded-full bg-white text-purple-600 text-sm font-semibold hover:bg-gray-100 transition">
                        Explore Products
                    </button>

                    <button className="px-6 py-3 rounded-full border border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-purple-600 transition">
                        View Pricing
                    </button>

                </div>

                {/* Footer Text */}
                <p className="mt-5 text-xs text-white/60">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>

        </section>
    );
};

export default CTA;