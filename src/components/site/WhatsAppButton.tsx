export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20MangoBliz%2C%20I%27d%20like%20to%20order%20mangoes."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.7.315-.402.46-1.13 1.39-1.13 2.79 0 1.318.927 2.578 1.07 2.793 1.06 1.418 2.118 2.535 3.633 3.323.5.272 2.578 1.07 3.122 1.07.945 0 2.79-.86 2.79-2.79 0-.687-1.347-1.146-1.347-1.146-.273-.115-.515-.215-.745-.215zM16.013 1.984C8.244 1.984 1.984 8.244 1.984 16c0 2.665.745 5.143 2.036 7.27L2 30l6.95-1.99A14 14 0 0016.013 30C23.78 30 30 23.78 30 16.013S23.78 1.984 16.013 1.984z" />
      </svg>
    </a>
  );
}
