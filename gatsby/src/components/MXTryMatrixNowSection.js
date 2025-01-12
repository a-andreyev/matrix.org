import React from 'react'

const MXTryMatrixNowSection = ({items}) => {
    return (
        <div className="mxblock">
        <div className="mxgrid mxgrid--discover">
        {items.map(function(project, i) {
            const language = project.frontmatter.language ? project.frontmatter.language
                .replace(/ /g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '-')
                .replace(/#/g, '-') : ""
            return (
        <div key={Math.random().toString()} className="mxgrid__item20 filterableProject"
            data-featured={project.frontmatter.featured}
            data-maturity={project.frontmatter.maturity}
            data-language={language}
            data-license={project.frontmatter.license}
            data-type={project.frontmatter.categories[0]}>
            <div className="mxgrid__item__bg mxgrid__item__bg--clear">
                
                <a href={project.fields.slug}><h4 className="mxgrid__item__bg__hx">{project.frontmatter.title}</h4></a>
                <p className="mxgrid__item__bg__p">{project.frontmatter.description}</p>
                <div className="mxgrid__item__bg__vert">
                    <img src={project.frontmatter.thumbnail} alt="" className="mxgrid__item__bg__img" />
                </div>
            </div>
        </div>)
        })}
        </div>
    </div>
)}
export default MXTryMatrixNowSection
