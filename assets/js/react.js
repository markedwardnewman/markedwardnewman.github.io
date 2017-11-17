function projectComponent (props) {
    var project = React.createElement('aside', null,
            React.createElement('h3', null, props.title),
            React.createElement('a', {className: 'link-project', target: '_blank', href: props.href_project}, 
              React.createElement('img', {src: props.img_src_project, alt: props.img_alt_project})
            ),
            React.createElement('a', {className: 'link-github', target: '_blank', href: props.href_github}, 
              React.createElement('img', {src: 'assets/img/logo-github.png', alt: 'github icon'})
            ),
            props.techs
        );
 
    return project;
}

ReactDOM.render(
    React.createElement(projectComponent, {
        title: 'Single Page App',
        href_project: 'https://community.spiceworks.com/partners/lenovo/mobilityquiz/mobilityquiz-en',
        href_github: '#',
        img_src_project: 'assets/img/logo-lenovo.png',
        img_alt_project: 'lenovo logo',
        techs: '- html, sass, js, jQuery, backbone.js, underscore.js'
    }),
    document.getElementById('app')
)


