import React from 'react';
import projects from '../../Project Data/Projects'; 
import ProjectItem from '../Projects/ProjectItem';


function ProjectList() {
  return (
    <section>
      {projects.map((item) => 
        <ProjectItem 
          key={item.image} 
          projectsProps={item}
        />)}
    </section>
  );
}

export default ProjectList;

