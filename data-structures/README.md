# Data Structure

A **data structure** (DS) is a way of organizing data so that it can be used effectively.

## Why Data Structure? 

They are essential ingredients in creating fast and powerful algorithms.

They help to manage and organize data.

They make code cleaner and easier to understand.

## Abstract Data Type

An **abtract data type** (ADT) is an abstraction of a data strcuture which provides only the interface to which a data structure must adhere to.

> The interface does not give any specific details about how something should be implemented or in what programming language.

## Categories of Abstract Data Type

### Linear Data Structures

Linear data structures are those where elements are arranged in a sequential order, and each element is connected to its previous and next element. Traversing these structures happens in a linear manner, one element at a time.

Examples:

- **Array**: A collection of elements identified by index. Fixed size and supports random access.
- **Linked List**: A collection of nodes where each node contains a data part and a reference (or pointer) to the next node in the sequence.
- **Stack**: Follows the LIFO (Last In, First Out) principle. Elements are added and removed from the same end.
- **Queue**: Follows the FIFO (First In, First Out) principle. Elements are added at the rear and removed from the front.
- **Deque (Double-ended queue)**: A data structure where elements can be added or removed from both ends (front and back).

### Non-Linear Data Structures

Non-linear data structures do not follow a sequence and have a more complex relationship between elements. They are hierarchical or interconnected.

Examples:

- Tree: A hierarchical structure with a root element and child elements. Each node can have multiple children, but only one parent.
    - Binary Tree: A tree where each node has at most two children.
    - Binary Search Tree (BST): A binary tree with the additional property that the left child node is smaller than the parent node, and the right child is larger.
    - Heap: A binary tree where the parent node is always greater (max-heap) or smaller (min-heap) than its children.
    - Trie: A tree-like data structure used for storing a dynamic set of strings, where the common prefixes are shared.
- Graph: A collection of nodes (called vertices) connected by edges. Graphs can be:
    - Directed Graph (Digraph): Edges have a direction.
    - Undirected Graph: Edges do not have a direction.
    - Weighted Graph: Edges have weights associated with them.
    - Unweighted Graph: Edges do not have weights.

### Hash-based Structures

These data structures use a hash function to map keys to values. They provide fast access, insert, and delete operations, typically in O(1) time complexity.

Examples:

- **Hash Table / Hash Map**: A collection of key-value pairs where each key is mapped to a unique value using a hash function.
- **Set**: A collection of unique elements. Operations like insert, delete, and lookup are generally O(1) with hash-based sets.

### Priority-based Structures
These data structures allow elements to be processed based on their priority rather than the order in which they were added.

Examples:
- **Priority** Queue: An abstract data type where each element has a priority, and the element with the highest priority is dequeued first.
- **Heap**: Often used to implement priority queues. A heap is a specialized tree-based structure that satisfies the heap property (max-heap or min-heap).

### Associative Data Structure
These are structures that store pairs of keys and values, where each key is associated with a unique value.

Examples:
- **Map / Dictionary**: A collection of key-value pairs, where each key maps to exactly one value.
- **Set**: A collection of distinct elements, typically implemented using hash tables or trees.

### Indexed Data Structure
These data structures allow for efficient indexing, enabling fast access, search, and updates.

Examples:
- **Array**: The most basic indexed structure, allowing random access to elements via index.
- **B-Tree**: A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. Often used in databases and file systems.
- **Skip List**: A data structure that allows for fast search within an ordered sequence of elements by maintaining multiple layers of linked lists.

### String-based Data Structures
These structures are specialized for handling sequences of characters (strings) and allow for efficient search and manipulation.

Examples:
- **Trie (Prefix Tree)**: A tree-like structure for storing strings where common prefixes are stored only once.
- **Suffix Tree**: A compressed trie for storing all suffixes of a given string, commonly used for pattern matching.
- **Rope**: A binary tree used for efficiently storing and manipulating very large strings.

### Disjoint-set / Union-find Data Structure
This is a specialized data structure used for tracking a set of elements partitioned into disjoint (non-overlapping) subsets. It is mainly used for problems like determining the connected components in a graph.

Examples:
- **Union-Find / Disjoint-set**: Supports two operations efficiently: finding the set a particular element belongs to, and uniting two sets.

### Spatial Data Structures
These structures store spatial or geometric information and are optimized for queries like range searches, nearest neighbors, and intersection detection.

Examples:
- **Quad Tree**: A tree structure used to partition a two-dimensional space by recursively subdividing it into four quadrants.
- **KD-Tree (k-dimensional tree)**: A tree used for organizing points in a k-dimensional space, often used for nearest neighbor searches.


