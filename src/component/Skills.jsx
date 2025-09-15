import React from 'react';

// A function to get the appropriate SVG icon for each skill
const getSkillIcon = (skillName) => {
  switch (skillName) {
    case 'HTML':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" className='h-10 w-10' />;
    case 'CSS':
      return <img src="https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg" alt="" className='h-10 w-10'/>;
    case 'JavaScript':
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" alt="" className='h-10 w-10'/>;
    case 'React JS':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="" className='h-10 w-10' />;
    case 'Tailwind CSS':
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" alt=""className='h-10 w-10' />;
    case 'Bootstrap':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt=""className='h-10 w-10' />;
    case 'Node JS':
      return <img src="https://img.icons8.com/fluent/200/node-js.png" alt=""className='h-10 w-10' />;
    case 'Express JS':
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s" alt=""className='h-10 w-10' />;
    case 'MySQL':
      return <img src="https://www.vhv.rs/dpng/d/256-2563210_sql-programming-language-logo-hd-png-download.png" alt=""className='h-10 w-10' />;
    case 'MongoDB':
      return <img src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt=""className='h-10 w-10' />;
    case 'C':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917" alt=""className='h-10 w-10' />;
    case 'C++':
      return <img src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png" alt=""className='h-10 w-10' />;
    case 'Git':
      return <img src="https://avatars.githubusercontent.com/u/18133?s=200&v=4" alt=""className='h-10 w-10' />;
    case 'GitHub':
      return <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt=""className='h-10 w-10' />;
    case 'VS Code':
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoirCtiJhhN8Tvo0FJRRd4CInsOXkRX9EbA&s" alt=""className='h-10 w-10'/>;
    case 'Vercel':
      return <img src="https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp" alt="" className='h-10 w-10'/>;
    case 'Netlify':
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvwgpiqc9FrNeVcW-NQekpPIwIcktyys_nw&s" alt="" className='h-10 w-10'/>;
    case 'Figma':
      return <img src="https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format" alt="" className='h-10 w-10'/>;
    default:
      return null;
  }
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "border-pink-500",
      skills: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React JS", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap" }
      ]
    },
    {
      title: "Backend",
      color: "border-green-500",
      skills: [
        { name: "Node JS", icon: "nodejs" },
        { name: "Express JS", icon: "expressjs" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
      ]
    },
    {
      title: "Languages",
      color: "border-blue-500",
      skills: [
        { name: "C", icon: "c" },
        { name: "C++", icon: "cplusplus" },
        { name: "JavaScript", icon: "javascript" } 
      ]
    },
    {
      title: "Tools",
      color: "border-yellow-500",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Vercel", icon: "vercel" },
        { name: "Netlify", icon: "netlify" },
        { name: "Figma", icon: "figma" }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-17 px-6 md:px-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">My Skills</h2>
        <div className="h-1.5 w-32 bg-blue-500 mx-auto rounded-full mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`relative bg-[#111827] p-8 rounded-3xl shadow-lg border-2 ${category.color} overflow-hidden group`}
            >
              {/* Animated glowing border */}
             <div className="absolute inset-0 rounded-3xl border-2 border-transparent 
  bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9] 
  opacity-0 group-hover:opacity-100 blur-sm transition duration-700 animate-gradient">
</div>



              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 bg-[#1f2937] px-5 py-3 rounded-xl shadow 
                        hover:shadow-lg hover:shadow-blue-500/40 
                        transition-all duration-500 text-lg"
                    >
                      {getSkillIcon(skill.name)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
