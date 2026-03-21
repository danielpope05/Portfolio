import certImg from "../assets/cert.jpg";

export default function Certificates() {
  return (
    <section className="py-24 px-8 bg-gray-100">
      
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto">
        
        <div className="bg-white shadow-md rounded-2xl p-10 grid md:grid-cols-2 gap-12 items-center hover:shadow-lg transition">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={certImg}
              alt="Google Cybersecurity Certificate"
              className="w-full max-w-sm rounded-xl border border-gray-200"
            />
          </div>

          {/* TEXT */}
          <div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Google Cybersecurity Certificate
            </h3>

            <p className="text-gray-500 mb-4">
              Google • May 2025 – Aug 2025
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Hands-on cybersecurity training focused on threat detection, incident response, 
              and secure systems.
            </p>

            {/* KEY SKILLS */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Key Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "SIEM",
                  "Log Analysis",
                  "Threat Detection",
                  "Incident Response",
                  "Security Monitoring",
                  "Vulnerability Assessment",
                  "Network Security",
                  "Network Protocols",
                  "Packet Analysis",
                  "Intrusion Detection",
                  "Cyber Threat Intelligence",
                  "Linux",
                  "SQL",
                  "Bash Scripting",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {["Splunk", "Chronicle", "Wireshark"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* FRAMEWORKS */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {["NIST", "SOC 2", "ISO 27001", "OWASP"].map((fw) => (
                  <span
                    key={fw}
                    className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* HIGHLIGHTS */}
            <ul className="space-y-2 text-gray-700">
              <li>• Performed log analysis and threat detection using SIEM tools</li>
              <li>• Analyzed network traffic to identify vulnerabilities</li>
              <li>• Supported incident response workflows (detect → contain → mitigate)</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}








// import certImg from "../assets/cert.jpg";

// export default function Certificates() {
//   return (
//     <section className="py-24 px-8 bg-gray-100">
      
//       <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//         Certifications
//       </h2>

//       <div className="max-w-6xl mx-auto">
        
//         <div className="bg-white shadow-md rounded-2xl p-10 grid md:grid-cols-2 gap-12 items-center hover:shadow-lg transition">
          
//           {/* IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src={certImg}
//               alt="Google Cybersecurity Certificate"
//               className="w-full max-w-sm rounded-xl border border-gray-200"
//             />
//           </div>

//           {/* TEXT */}
//           <div>
            
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               Google Cybersecurity Certificate
//             </h3>

//             <p className="text-gray-500 mb-4">
//               Google • May 2025 – Aug 2025
//             </p>

//             <p className="text-gray-700 mb-6 leading-relaxed">
//               Hands-on cybersecurity training focused on threat detection, incident response, 
//               and secure systems.
//             </p>

//             {/* KEY SKILLS */}
//             <div className="mb-6">
//               <p className="text-sm font-semibold text-gray-800 mb-2">
//                 Key Skills
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "SIEM",
//                   "Log Analysis",
//                   "Network Security",
//                   "Incident Response",
//                   "Threat Detection",
//                   "Linux",
//                   "SQL",
//                 ].map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* TOOLS */}
//             <div className="mb-6">
//               <p className="text-sm font-semibold text-gray-800 mb-2">
//                 Tools
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {["Splunk", "Chronicle", "Wireshark"].map((tool) => (
//                   <span
//                     key={tool}
//                     className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full"
//                   >
//                     {tool}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* FRAMEWORKS */}
//             <div className="mb-6">
//               <p className="text-sm font-semibold text-gray-800 mb-2">
//                 Frameworks
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {["NIST", "SOC 2", "ISO 27001", "OWASP"].map((fw) => (
//                   <span
//                     key={fw}
//                     className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full"
//                   >
//                     {fw}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* HIGHLIGHTS */}
//             <ul className="space-y-2 text-gray-700">
//               <li>• Performed log analysis and threat detection using SIEM tools</li>
//               <li>• Analyzed network traffic to identify vulnerabilities</li>
//               <li>• Supported incident response workflows (detect → contain → mitigate)</li>
//             </ul>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// import certImg from "../assets/cert.jpg";

// export default function Certificates() {
//   return (
//     <section className="py-24 px-8 bg-gray-50">
      
//       <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//         Certifications
//       </h2>

//       <div className="max-w-6xl mx-auto">
        
//         <div className="bg-white shadow-xl rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
          
//           {/* BIG IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src={certImg}
//               alt="Google Cybersecurity Certificate"
//               className="w-full max-w-md rounded-xl shadow-md border"
//             />
//           </div>

//           {/* TEXT SIDE */}
//           <div>
            
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//               Google Cybersecurity Certificate
//             </h3>

//             <p className="text-gray-500 mb-4">
//               Issued by Google • May 2025 – Aug 2025
//             </p>

//             <p className="text-gray-700 mb-5 leading-relaxed">
//               Completed hands-on training focused on security operations, threat detection, 
//               and incident response using real-world tools and environments.
//             </p>

//             <ul className="space-y-2 text-gray-700">
//               <li>• Analyzed security data using SIEM tools, Linux, and SQL</li>
//               <li>• Performed network traffic analysis and supported incident response workflows</li>
//               <li>• Applied OWASP secure practices and studied NIST, SOC 2, ISO 27001 frameworks</li>
//             </ul>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }