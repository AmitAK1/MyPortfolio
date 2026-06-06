import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Amit Kamble | AI Engineer",
  description:
    "AI Engineer building LLM, computer vision, and agentic systems with a focus on scalable AI infrastructure."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=window.sessionStorage;void s&&s.getItem}catch(e){try{Object.defineProperty(window,'sessionStorage',{value:(function(){var store={};return{getItem:function(k){return store[k]??null},setItem:function(k,v){store[k]=String(v)},removeItem:function(k){delete store[k]},clear:function(){store={}}}})(),configurable:true});}catch(e2){/* ignore */}}window.addEventListener('unhandledrejection',function(evt){try{var reason=evt.reason;if(reason&&reason.message&&reason.message.indexOf('sessionStorage')!==-1){evt.preventDefault();console.warn('Suppressed sessionStorage SecurityError',reason);}}catch(_){}});})();`
          }}
        />
      </head>
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
