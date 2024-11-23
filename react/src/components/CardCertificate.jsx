export const CardCertificate = () =>{
    return(
            <div class="group relative w-80 h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300">
    <div class="absolute inset-0 flex flex-col items-center justify-center p-5 text-white text-center backface-hidden group-hover:rotate-y-180 group-hover:opacity-0">
        <svg class="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
        <h2 class="text-xl font-semibold">Certificados Profesionales</h2>
        <p class="mt-2">Haz clic para explorar</p>
    </div>

    <div class="absolute inset-0 flex flex-col items-center justify-center p-5 bg-gray-900 text-white text-center transform rotate-y-180 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0">
        <ul class="space-y-2">
        <li>
            <h3 class="font-semibold">Certificado en React</h3>
            <p class="text-sm">Institución: XYZ</p>
        </li>
        <li>
            <h3 class="font-semibold">Certificado en Node.js</h3>
            <p class="text-sm">Institución: ABC</p>
        </li>
        </ul>
        <a href="#" class="mt-4 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">Ver todos</a>
    </div>
    </div>

    );
}