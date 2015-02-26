/**
 * Physics engine module.
 * Exports a "namespace" of mixins.
 */

/* Kinematics mixins */

//PHYSX.addAcceleration(obj, /*{ x:ax, y:ay }*/ acceleration, /*{ x:vx, y:vy }*/ velocity, /*{ x:x, y:y }*/ startingPosition)
exports.addAcceleration = require('./lib/mixinAcceleration');

//PHYSX.addVelocity(obj, /*{ x:vx, y:vy }*/ velocity, /*{ x:x, y:y }*/ startingPosition)
exports.addVelocity = require('./lib/mixinVelocity');


/* Bounding-box and out-of-bounds-flagging mixins */

//PHYSX.addBoundingBox(obj, /*{ width:w, height:h }*/ dimensions, /*{ x:x, y:y }*/ boundsOffset)
exports.addBoundingBox = require('./lib/mixinBoundingBox');

//PHYSX.addBoundsChecking(obj, /*{ left:l, right:r, bottom:b, top:t }*/ inBounds, /*{ width:w, height:h }*/ dimensions, /*{ x:x, y:y }*/ boundsOffset);
exports.addBoundsChecking = require('./lib/mixinOutOfBoundsChecking');


/* Tick functions */
// The "tick" object: { frames:frameCount, deltaMillis:dm, totalMillis:tm }

//PHYSX.mixin(obj, function onTick(tick) { return isTerminated(obj); })
exports.mixinTerminator = require('./lib/mixinTerminator');

//PHYSX.mixin(obj, function onTick(tick) {...})
exports.mixin = require('./lib/mixinUpdater');


/* Misc mixins */

//PHYSX.addHSL(obj, huePropName, colorPropName)
exports.addHSL = require('./lib/mixinHSL');
