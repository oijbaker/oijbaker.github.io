---
layout: post
title: Research
description: A brief introduction to Soft Random Geometric Graph Entropy
image: assets/images/fig1.png
nav-menu: true
---

There are many models of random graphs, however most of them do not incorporate a spatial aspect in the process. The Random Geometric Graph (RGG) achieves this by creating a random network as follows:

1. Distribute points according to a point process (usually Poisson or Binomial) in some space.
2. Connect the points according to a connection function p which is dependent on the pairwise distance of the points.

By considering the probability space of graphs that can be created in this manner, we can define a random graph ensemble of soft random geometric graphs, and in particular, we can measure its entropy.

The explicit entropy of a random geometric graph ensemble is intractable in all but very few cases. So far, we can only calculate the entropy of classical random geometric graph ensembles on three nodes in the 1D torus, and the unit line interval. However, we can calculate the ensemble entropy-per-edge for general connection functions in the infinite node limit for any d-dimensional rectangular geometry.

Currently, we are interested in studying the properties of the maximum entropy graph ensemble, specifically the average probability of connection for each edge, and when this is greater than or less than one half.
