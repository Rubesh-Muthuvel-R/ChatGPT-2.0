/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com"],
  },
  experimental:{
    appDir:true,
    reactRoot: true, 
    runtime: "nodejs", 
    serverComponents: true, 
    concurrentFeatures: true 
  },
};