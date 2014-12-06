/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo;
logo = new ImageSurface({
    size: [200, 200],
    content: 'Kyle',
    classes: ['double-sided'],
    properties: {
        color: 'gray',
        textAlign: 'center',
        fontSize: '40px',
        borderRadius: '20px',
        backgroundColor: '#FA5C4F'}
    });

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function () {
        return Transform.rotateY(.002 * (Date.now() - initialTime));
    }
});

mainContext.add(centerSpinModifier).add(logo);
