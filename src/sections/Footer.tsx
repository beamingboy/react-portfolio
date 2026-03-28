// import socialLinks from "../data/socialLinks";

// function Footer() {
//     const currentYear = new Date().getFullYear();
//     return (
//         <footer
//             className="border-t px-8 py-6"
//             style={{
//                 backgroundColor: "var(--color-bg)",
//                 borderColor: "var(--color-surface)",
//             }}
//         >
//             <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

//                 {/* LEFT */}
//                 <p
//                     className="text-sm"
//                     style={{ color: "var(--color-text)" }}
//                 >
//                     © {currentYear} Vinay Kumar. All rights reserved.
//                 </p>

//                 {/* RIGHT (dynamic links) */}
//                 <div className="flex items-center gap-4">
//                     {socialLinks.map((item) => (
//                         <a
//                             key={item.id}
//                             href={item.link}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="transition hover:text-[var(--color-primary)] hover:-translate-y-[2px]"
//                             style={{ color: "var(--color-text)" }}
//                         >
//                             {item.icon}
//                         </a>
//                     ))}
//                 </div>

//             </div>
//         </footer>
//     );
// }

// export default Footer;