const ClientsSlider = () => {
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "DataStream", logo: "DS" },
    { name: "CloudFirst", logo: "CF" },
    { name: "DigitalEdge", logo: "DE" },
    { name: "FutureFlow", logo: "FF" },
    { name: "SmartSync", logo: "SS" },
    { name: "ProActive", logo: "PA" }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        {/* Moving slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-in space-x-12">
            {/* First set */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex items-center space-x-3 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{client.logo}</span>
                </div>
                <span className="text-lg font-medium text-foreground whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex items-center space-x-3 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{client.logo}</span>
                </div>
                <span className="text-lg font-medium text-foreground whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;