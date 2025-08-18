// Dynamic content for the website
document.addEventListener('DOMContentLoaded', function() {
    const appContent = document.getElementById('app-content');
    
    const content = `
    <!-- Services/Features Section -->
    <section id="voordelen" class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    Wat U Leert in Ons eBook
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-accent-500 rounded"></span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ontdek de insider kennis die u nodig heeft om uw huis succesvol te verkopen
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition shadow transition-transform hover:-translate-y-1">
                    <div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Optimale Prijsstelling</h3>
                    <p class="text-gray-600">
                        Leer hoe u de perfecte vraagprijs bepaalt op basis van marktanalyse en vergelijkbare verkopen.
                    </p>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Professionele Presentatie</h3>
                    <p class="text-gray-600">
                        Staging technieken en fotografie tips die uw huis laten opvallen.
                    </p>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Onderhandelingsstrategieën</h3>
                    <p class="text-gray-600">
                        Bewezen tactieken om de beste prijs uit elke bieding te halen.
                    </p>
                </div>
            </div>
            
            <!-- Strategic CTA after services -->
            <div class="text-center mt-12">
                <a href="https://www.paypro.nl/producten/Succesvol_Uw_Huis_Verkopen/457/14535" target="_blank" rel="noopener noreferrer" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block">
                    Krijg Direct Toegang - €29
                </a>
                <p class="text-sm text-gray-600 mt-2">✓ Directe download ✓ Geld terug garantie</p>
            </div>
        </div>
    </section>

    <!-- How It Works/Process Section -->
    <section id="proces" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    Hoe Ons eBook U Helpt Uw Huis Te Verkopen
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-accent-500 rounded"></span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Volg onze bewezen stap-voor-stap methode om uw huis succesvol te verkopen
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Bereid Uw Huis Voor</h3>
                    <p class="text-gray-600">
                        Implementeer onze staging tips in slechts één weekend. 
                        Leer welke kleine aanpassingen grote impact hebben op de verkoopprijs.
                    </p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Breng Uw Huis Op De Markt</h3>
                    <p class="text-gray-600">
                        Gebruik onze bewezen marketing strategieën om meer geïnteresseerde kopers 
                        aan te trekken en uw verkoopduur te verkorten.
                    </p>
                </div>
                
                <div class="text-center">
                    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Onderhandel Biedingen</h3>
                    <p class="text-gray-600">
                        Pas onze onderhandelingsstrategieën toe om de beste prijs uit elke bieding 
                        te halen en succesvol af te sluiten.
                    </p>
                </div>
            </div>
            
            <!-- Strategic CTA after process -->
            <div class="text-center mt-12">
                <div class="bg-accent-50 border-2 border-accent-200 rounded-xl p-6 max-w-md mx-auto">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Klaar om te beginnen?</h3>
                    <p class="text-gray-600 mb-4">Download nu en start vandaag met de voorbereiding</p>
                    <a href="https://www.paypro.nl/producten/Succesvol_Uw_Huis_Verkopen/457/14535" target="_blank" rel="noopener noreferrer" class="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-block">
                        Start Nu - €29
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    Wat Onze Klanten Zeggen
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 h-1 bg-accent-500 rounded"></span>
                </h2>
                <p class="text-xl text-gray-600">
                    Echte resultaten van huiseigenaren die ons eBook hebben gebruikt
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="Maria de Vries" loading="lazy" decoding="async" width="100" height="100"
                             class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-gray-900">Maria de Vries</h4>
                            <p class="text-gray-600 text-sm">Huiseigenaar, Amsterdam</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">
                        "Dankzij dit eBook heb ik mijn huis voor €15.000 boven de vraagprijs verkocht! 
                        De staging tips waren goud waard."
                    </p>
                    <div class="flex text-yellow-400">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="Jan Bakker" loading="lazy" decoding="async" width="100" height="100"
                             class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-gray-900">Jan Bakker</h4>
                            <p class="text-gray-600 text-sm">Ondernemer, Rotterdam</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">
                        "Binnen 3 weken verkocht na het toepassen van de strategieën uit het eBook. 
                        Veel sneller dan verwacht!"
                    </p>
                    <div class="flex text-yellow-400">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="Peter Jansen" loading="lazy" decoding="async" width="100" height="100"
                             class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-gray-900">Peter Jansen</h4>
                            <p class="text-gray-600 text-sm">IT Consultant, Den Haag</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">
                        "Eindelijk een gids die praktische, bruikbare tips geeft! 
                        Mijn huis stond maar 2 weken online voordat ik een goede bieding kreeg."
                    </p>
                    <div class="flex text-yellow-400">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <div class="flex items-center mb-6">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                             alt="Lisa van der Berg" loading="lazy" decoding="async" width="100" height="100"
                             class="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold text-gray-900">Lisa van der Berg</h4>
                            <p class="text-gray-600 text-sm">Marketing Manager, Utrecht</p>
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4">
                        "De onderhandelingsstrategieën hebben me geholpen om €8.000 meer te krijgen 
                        dan de eerste bieding. Absoluut de investering waard!"
                    </p>
                    <div class="flex text-yellow-400">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Strategic CTA after testimonials -->
            <div class="text-center mt-12">
                <div class="bg-white border-2 border-green-200 rounded-xl p-8 max-w-lg mx-auto shadow-lg">
                    <div class="flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <h3 class="text-xl font-bold text-gray-900">Bewezen Resultaten</h3>
                    </div>
                    <p class="text-gray-600 mb-6">Sluit je aan bij 500+ tevreden huiseigenaren die hun huis succesvol hebben verkocht</p>
                    <a href="https://www.paypro.nl/producten/Succesvol_Uw_Huis_Verkopen/457/14535" target="_blank" rel="noopener noreferrer" class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-block">
                        Ik Wil Ook Succes - €29
                    </a>
                    <p class="text-xs text-gray-500 mt-3">30 dagen geld terug garantie</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Lokale Verkooptips (SEO/GEO) -->
    <section id="lokale-tips" class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    Lokale Verkooptips per Stad
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-accent-500 rounded"></span>
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Praktische highlights die particulieren helpen sneller te verkopen in hun regio. Deze site biedt informatie en verwijst voor aankoop/levering naar PayPro.
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Amsterdam</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Beste bezichtigingstijden: doordeweeks 17:30–19:30</li>
                        <li>Appartementen: benadruk VvE, energielabel en isolatie</li>
                        <li>Seizoen: lente en nazomer hoogste vraag</li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Rotterdam</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Focus op bereikbaarheid OV en parkeervergunning</li>
                        <li>Jaren ’30 woningen: onderhoud en fundering transparant</li>
                        <li>Professionele foto’s met skyline/bruggen in zicht</li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Den Haag</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Expats: benadruk internationale scholen en strand</li>
                        <li>Bouwkundig rapport helpt bij oudere panden</li>
                        <li>Open huis op zaterdagmiddag werkt goed</li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Utrecht</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Fietsminuten naar centrum/universiteit vermelden</li>
                        <li>Starters: licht en indeling zijn doorslaggevend</li>
                        <li>Tuinen: onderhoudsarm scoort goed</li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Eindhoven</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Tech-professionals: thuiswerkplek en glasvezel</li>
                        <li>Energiezuinigheid (HR++/zonnepanelen) benadrukken</li>
                        <li>Meetrapport NEN2580 toevoegen</li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-6">
                    <h3 class="font-semibold text-gray-900 mb-3">Groningen</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Studenten/young professionals: compacte, slimme indeling</li>
                        <li>Benadruk energielabel en geluidsisolatie</li>
                        <li>Vraag piekt bij semesterwissels</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                    Veelgestelde Vragen
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 h-1 bg-accent-500 rounded"></span>
                </h2>
                <p class="text-xl text-gray-600">
                    Antwoorden op de meest gestelde vragen over huisverkoop in Nederland
                </p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button class="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none faq-toggle">
                        <div class="flex justify-between items-center">
                            <span>Wat is de gemiddelde verkooptijd van een huis in Nederland?</span>
                            <svg class="w-5 h-5 transform transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </button>
                    <div class="px-8 pb-6 hidden faq-content">
                        <p class="text-gray-600">
                            De gemiddelde verkooptijd in Nederland is ongeveer 45-60 dagen, afhankelijk van de locatie en marktomstandigheden. 
                            Met onze strategieën kunnen veel klanten hun huis binnen 28 dagen verkopen.
                        </p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button class="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none faq-toggle">
                        <div class="flex justify-between items-center">
                            <span>Hoe bepaal ik de juiste vraagprijs voor mijn huis?</span>
                            <svg class="w-5 h-5 transform transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </button>
                    <div class="px-8 pb-6 hidden faq-content">
                        <p class="text-gray-600">
                            De juiste vraagprijs bepaalt u door marktanalyse van vergelijkbare woningen, 
                            rekening houdend met unieke kenmerken van uw huis en huidige marktomstandigheden. 
                            Ons eBook bevat een stap-voor-stap methode hiervoor.
                        </p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button class="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none faq-toggle">
                        <div class="flex justify-between items-center">
                            <span>Wat zijn de kosten koper en hoe beïnvloeden deze mijn verkoop?</span>
                            <svg class="w-5 h-5 transform transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </button>
                    <div class="px-8 pb-6 hidden faq-content">
                        <p class="text-gray-600">
                            Kosten koper betekent dat de koper alle bijkomende kosten betaalt (overdrachtsbelasting, notaris, taxatie). 
                            Dit beïnvloedt de biedingsstrategie en uiteindelijke verkoopprijs aanzienlijk.
                        </p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button class="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none faq-toggle">
                        <div class="flex justify-between items-center">
                            <span>Heb ik een makelaar nodig om mijn huis te verkopen?</span>
                            <svg class="w-5 h-5 transform transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </button>
                    <div class="px-8 pb-6 hidden faq-content">
                        <p class="text-gray-600">
                            Een makelaar is niet verplicht, maar kan wel waardevol zijn. Ons eBook helpt u 
                            de juiste beslissing te maken en geeft u de kennis om effectief samen te werken 
                            met een makelaar of zelfstandig te verkopen.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Strategic CTA after FAQ -->
            <div class="text-center mt-12">
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Nog vragen? Alle antwoorden staan in het eBook</h3>
                    <p class="text-gray-600 mb-4">Krijg toegang tot de complete gids met alle details en stap-voor-stap instructies</p>
                    <a href="https://www.paypro.nl/producten/Succesvol_Uw_Huis_Verkopen/457/14535" target="_blank" rel="noopener noreferrer" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-block">
                        Download Volledige Gids - €29
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section id="download" class="gradient-bg py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Vandaag Met Het Succesvol Verkopen Van Uw Huis
            </h2>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Download ons complete eBook en krijg direct toegang tot alle strategieën, 
                tips en insider kennis die u nodig heeft.
            </p>
            
            <div class="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Download Nu Voor Slechts €29</h3>
                <div class="space-y-4 mb-6">
                    <div class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Directe download na betaling
                    </div>
                    <div class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Gratis updates voor het leven
                    </div>
                    <div class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        Niet goed, geld terug garantie
                    </div>
                </div>
                
                <a href="https://www.paypro.nl/producten/Succesvol_Uw_Huis_Verkopen/457/14535" target="_blank" rel="noopener noreferrer" class="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 mb-4 inline-block text-center">
                    Download eBook Nu - €29
                </a>
                
                <p class="text-sm text-gray-600">
                    Veilige betaling via iDEAL, PayPal of creditcard
                </p>
            </div>
            
            <div class="mt-12 text-center text-blue-100">
                <p class="mb-2 font-semibold">Over deze website</p>
                <p class="text-sm text-blue-200 max-w-3xl mx-auto">
                    Succesvol Uw Huis Verkopen is een onafhankelijke informatieve website en affiliate partner. 
                    Wij bieden géén klantenservice, kantoor of telefonische ondersteuning. Voor aankoop of levering verwijzen we naar de PayPro productpagina. 
                    Handige verkoopinformatie voor heel Nederland: Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen en meer.
                </p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Succesvol Uw Huis Verkopen</h3>
                    <p class="text-gray-300 mb-4">
                        Onafhankelijke informatie en beproefde strategieën om uw woning sneller en voor een betere prijs te verkopen. 
                        Gericht op de Nederlandse markt met lokale tips per regio.
                    </p>
                    <p class="text-gray-400 text-sm">
                        Disclaimer: deze website levert geen dienst, heeft geen kantoor en biedt geen telefonische ondersteuning. 
                        Aankoop en levering verlopen via de PayPro productpagina.
                    </p>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Snelle Links</h4>
                    <ul class="space-y-2 text-gray-300">
                        <li><a href="#voordelen" class="hover:text-white transition-colors">Voordelen</a></li>
                        <li><a href="#proces" class="hover:text-white transition-colors">Hoe Het Werkt</a></li>
                        <li><a href="#testimonials" class="hover:text-white transition-colors">Ervaringen</a></li>
                        <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Over deze website</h4>
                    <div class="text-gray-300 space-y-2">
                        <p>
                            Informatieve gids voor particuliere verkopers in Nederland. Geen klantenservice of kantoor; 
                            voor vragen over betaling/levering verwijzen wij naar PayPro.
                        </p>
                        <p class="text-sm text-gray-400">
                            Relevante regio’s: Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, Tilburg, Almere, Nijmegen, Haarlem.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Succesvol Uw Huis Verkopen. Alle rechten voorbehouden.</p>
            </div>
        </div>
    </footer>
    `;
    
    appContent.innerHTML = content;

    // Insert urgency timer before the first PayPro CTA
    (function insertUrgencyTimer() {
        const firstCta = appContent.querySelector('a[href*="paypro.nl/producten/Succesvol_Uw_Huis_Verkopen"]');
        if (!firstCta) return;

        const container = document.createElement('div');
        container.className = 'bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4 text-yellow-900';
        container.innerHTML = `
            <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-2 font-semibold">
                    <span>⏳</span>
                    <span>Beperkte Tijd: tijdelijke kortingsactie</span>
                </div>
                <div class="text-sm"><span id="ehv-timer" class="font-bold">10:00</span> min</div>
            </div>
            <div class="mt-3 w-full h-2 bg-yellow-100 rounded-full overflow-hidden">
                <div id="ehv-progress" class="h-2 bg-yellow-400 w-full transition-[width] duration-1000"></div>
            </div>
        `;
        firstCta.parentElement.insertBefore(container, firstCta);

        // Countdown 10 minutes
        const total = 10 * 60; // seconds
        const timerEl = container.querySelector('#ehv-timer');
        const progressEl = container.querySelector('#ehv-progress');
        let remaining = total;
        const tick = () => {
            const m = String(Math.floor(remaining / 60)).padStart(2, '0');
            const s = String(remaining % 60).padStart(2, '0');
            timerEl.textContent = `${m}:${s}`;
            const pct = Math.max(0, (remaining / total) * 100);
            progressEl.style.width = pct + '%';
            if (remaining <= 0) return clearInterval(interval);
            remaining -= 1;
        };
        tick();
        const interval = setInterval(tick, 1000);
    })();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // FAQ functionality with accessibility improvements
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            const expanded = this.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                this.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
