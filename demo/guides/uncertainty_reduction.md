# Uncertainty reduction (IN PROGRESS; VERY EARLY DRAFT)

## Introduction

Modeling and reducing one's uncertainty about the state of the world or about the likelihood of given outcomes is core to making good decisions. Modeling uncertainty and uncertainty reduction is in scope for Cyber UI.

## Minimum viable approach

While consuming applications may customize how they implement uncertainty reduction workflows, consider the following approach, which may be considered a "minimum viable approach":

1. Keep track of the user's uncertainty about various propositions in the form of discrete probability distributions
2. Solicit from the user a ranked list of high-leverage uncertainty reductions to pursue
3. Occasionally prompt the user to take action on the highest-leverage uncertainty reductions

