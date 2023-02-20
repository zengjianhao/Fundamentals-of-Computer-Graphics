# 2 Miscellaneous Math

Much of graphics is just translating math directly into code. The cleaner the math, the cleaner the resulting code; so much of this book concentrates on using just the right math for the job. This chapter reviews various tools from high school and college mathematics and is designed to be used more as a reference than as a tutorial. It may appear to be a hodge-podge of topics and indeed it is; each topic is chosen because it is a bit unusual in “standard” math curricula, because it is of central importance in graphics, or because it is not typically treated from a geometric standpoint. In addition to establishing a review of the notation used in the book, the chapter also emphasizes a few points that are sometimes skipped in the standard undergraduate curricula, such as barycentric coordinates on triangles. This chapter is not intended to be a rigorous treatment of the material; instead intuition and geometric interpretation are emphasized. A discussion of linear algebra is deferred until Chapter 5 just before transformation matrices are discussed. Readers are encouraged to skim this chapter to familiarize themselves with the topics covered and to refer back to it as needed. The exercises at the end of the chapter may be useful in determining which topics need a refresher.

## 2.1 Sets and Mappings

Mappings, also called functions, are basic to mathematics and programming. Like a function in a program, a mapping in math takes an argument of one type and maps it to (returns) an object of a particular type. In a program we say “type”; in math we would identify the set. When we have an object that is a member of a set, we use the $\in$ symbol. For example,

$$
a \in S
$$

can be read “$a$ is a member of set $S$.” Given any two sets $A$ and $B$, we can create a third set by taking the Cartesian product of the two sets, denoted $A \times B$. This set $A \times B$ is composed of all possible ordered pairs $(a, b)$ where $a \in A$ and $b \in B$. As a shorthand, we use the notation $A^2$ to denote $A \times A$. We can extend the Cartesian product to create a set of all possible ordered triples from three sets and so on for arbitrarily long ordered tuples from arbitrarily many sets.

Common sets of interest include:

- $R$ the real numbers;
- $R^{+}$ the nonnegative real numbers (includes zero);
- $R^2$ the ordered pairs in the real 2D plane;
- $R^n$ the points in n-dimensional Cartesian space;
- $Z$ the integers;
- $S^2$ the set of 3D points (points in $R^3$) on the unit sphere.

Note that although $S^2$ is composed of points embedded in three-dimensional space, they are on a surface that can be parameterized with two variables, so it can be thought of as a 2D set. Notation for mappings uses the arrow and a colon, for example:

$$
f: R \longmapsto Z
$$

which you can read as “There is a function called $f$ that takes a real number as input and maps it to an integer.” Here, the set that comes before the arrow is called the domain of the function, and the set on the right-hand side is called the target. Computer programmers might be more comfortable with the following equivalent language: “There is a function called $f$ which has one real argument and returns an integer.” In other words, the set notation above is equivalent to the common programming notation:

$$
integer f(real) \leftarrow equivalent \rightarrow f: R \longmapsto Z
$$

So the colon-arrow notation can be thought of as a programming syntax. It’s that simple.

The point $f(a)$ is called the image of $a$, and the image of a set $A$ (a subset of the domain) is the subset of the target that contains the images of all points in $A$. The image of the whole domain is called the range of the function.

### 2.1.1 Inverse Mappings


If we have a function $f: A \longmapsto B$, there may exist an inverse function $f^{-1}: B \longmapsto A$, which is deﬁned by the rule $f^{-1}(b)$ where $b = f(a)$. This deﬁnition only works if every $b \in B$ is an image of some point under $f$ (that is, the range equals the target) and if there is only one such point (that is, there is only one a for which $f(a) = b$). Such mappings or functions are called bijections. A bijection maps every $a \in A$ to a unique $b \in B$, and for every $b \in B$, there is exactly one $a \in A$ such that $f(a) = b$ (Figure 2.1). A bijection between a group of riders and horses indicates that everybody rides a single horse, and every horse is ridden. The two functions would be rider(horse) and horse(rider). These are inverse functions of each other. Functions that are not bijections have no inverse (Figure 2.2).




### 2.1.2 Intervals

### 2.1.3 Logarithms
