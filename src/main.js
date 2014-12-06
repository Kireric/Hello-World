var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var Surface = famous.core.Surface;

var mainContext = Engine.createContext();

var firstSurface = new Surface({
    size: [true, true],
    content: 'Hello Hello',
    properties: {
        color: 'white',
        textAlign: 'center',
        fontSize: '40px',
        borderRadius:'20px',
        backgroundColor: '#FA5C4F'

}
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
    transform : function () {
        return Transform.rotateY(.005 * (Date.now() - initialTime));
    }
});

mainContext.add(centerSpinModifier).add(firstSurface);
