import React from 'react';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="项目展示" 
          subtitle="这里是我近期参与或独立开发的一些项目"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
