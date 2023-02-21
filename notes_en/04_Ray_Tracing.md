# 4 Ray Tracing

One of the basic tasks of computer graphics is rendering three-dimensional objects: taking a scene, or model, composed of many geometric objects arranged in 3D space and producing a 2D image that shows the objects as viewed from a particular viewpoint. It is the same operation that has been done for centuries by architects and engineers creating drawings to communicate their designs to others.

Fundamentally, rendering is a process that takes as its input a set of objects and produces as its output an array of pixels. One way or another, rendering involves considering how each object contributes to each pixel; it can be organized in two general ways. In object-order rendering, each object is considered in turn, and for each object all the pixels that it inﬂuences are found and updated. In imageorder rendering, each pixel is considered in turn, and for each pixel all the objects that inﬂuence it are found and the pixel value is computed. You can think of the difference in terms of the nesting of loops: in image-order rendering the “for each pixel” loop is on the outside, whereas in object-order rendering the “for each object” loop is on the outside.

Image-order and object-order rendering approaches can compute exactly the same images, but they lend themselves to computing different kinds of effects and have quite different performance characteristics. We’ll explore the comparative strengths of the approaches in Chapter 8 after we have discussed them both, but, broadly speaking, image-order rendering is simpler to get working and more ﬂexible in the effects that can be produced, and usually (though not always) takes much more execution time to produce a comparable image.

Ray tracing is an image-order algorithm for making renderings of 3D scenes, and we’ll consider it ﬁrst because it’s possible to get a ray tracer working without developing any of the mathematical machinery that’s used for object-order rendering.

## 4.1 The Basic Ray-Tracing Algorithm

A ray tracer works by computing one pixel at a time, and for each pixel the basic task is to ﬁnd the object that is seen at that pixel’s position in the image. Each pixel “looks” in a different direction, and any object that is seen by a pixel must intersect the viewing ray, a line that emanates from the viewpoint in the direction that pixel is looking. The particular object we want is the one that intersects the viewing ray nearest the camera, since it blocks the view of any other objects behind it. Once that object is found, a shading computation uses the intersection point, surface normal, and other information (depending on the desired type of rendering) to determine the color of the pixel. This is shown in Figure 4.1, where the ray intersects two triangles, but only the ﬁrst triangle hit, $T_2$ , is shaded.

A basic ray tracer therefore has three parts:

## 4.2 Perspective

## 4.3 Computing Viewing Rays

## 4.4 Ray-Object Intersection

## 4.5 Shading

## 4.6 A Ray-Tracing Program

## 4.7 Shadows

## 4.8 Ideal Specular Reﬂection

## 4.9 Historical Notes
