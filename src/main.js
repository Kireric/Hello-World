var Surface    = famous.core.Surface;
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;

var mainContext = Engine.createText();

var surface = new Surface({
  size: [200, 200],
  content: 'Eric',
  classes: ['double-sided'],
  properties : {
    color: 'coral',
    textAlign: 'center',
    fontSize: '46px',
    borderRadius: '5px',
    backgroundColor: 'pink'

  }
});

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
  origin: [0.5, 0.5],
  align: [0.5, 0.5],
  transform : function () {
    return Transform.rotateY(.001 * (Date.now() - initialTime));
  }
});

mainContext.add(centerSpinModifier).add(surface);
