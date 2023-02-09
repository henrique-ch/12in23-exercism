Run script "hello world"

Create file 'hello.exs'

```elixir
IO.puts("Hello, World!")
```

Run: 

```bash
elixir hello.exs  # Hello, World!
```




## Basic [[Types]] 

Some this basic types are:

1 - Integer 
2 - Floats 
3 - Booleans
4 - Atom/symbol
5 - List 
6 - Tuples 

```elixir
iex> 1          # integer
iex> 0x1F       # integer
iex> 1.0        # float
iex> true       # boolean
iex> :atom      # atom / symbol
iex> "elixir"   # string
iex> [1, 2, 3]  # list
iex> {1, 2, 3}  # tuple
```


## Basic Arith1metic

```
iex> 1 + 2
3
iex> 5 * 5
25
iex> 10 / 2
5.0
```

notice that 10 / 2 return 5.0 that is float, the operator */* return float for default, for return a integer use *div*  

```elixir
div(10, 2) # 5
```

#### Some useful methods:

- is_boolean()
- String.lenght()
- is_binary()
- byte_size()
- String.upcase()
- is_atom()

## [[Anonymous Functions]] 


```elixir
add = fn a, b -> a + b end 

add.(2, 5)

```


```elixir
	is_function(add, 2) # true
```

```ad-note
check if add is a function that expects exactly 2 arguments
```


Can also access variables that are in scope when the function is defined.


```elixir
iex> double = fn a -> add.(a, a) end

iex> double.(2)
4
```

## Lists 


Elixir uses square brackets to specify a list of values. Values can be of any type:
```
iex> [1, 2, true, 3]
[1, 2, true, 3]
iex> length [1, 2, 3]
3
```

List operators never modify the existing list. Concatenating to or removing elements from a list returns a new list. We say that Elixir data structures are _immutable_. One advantage of immutability is that it leads to clearer code. You can freely pass the data around with the guarantee no one will mutate it in memory - only transform it.

Sometimes you will create a list and it will return a value in single quotes. For example:

```
iex> [11, 12, 13]
'\v\f\r'
iex> [104, 101, 108, 108, 111]
'hello'
```

When Elixir sees a list of printable ASCII numbers, Elixir will print that as a charlist (literally a list of characters). Charlists are quite common when interfacing with existing Erlang code. Whenever you see a value in IEx and you are not quite sure what it is, you can use the `i/1` to retrieve information about it:

```
iex> i 'hello'
Term
  'hello'
Data type
  List
Description
  ...
Raw representation
  [104, 101, 108, 108, 111]
Reference modules
  List
Implemented protocols
  ...
```


## Tuples

Elixir uses curly brackets to define tuples. Like lists, tuples can hold any value:


```
iex> {:ok, "hello"}
{:ok, "hello"}
iex> tuple_size {:ok, "hello"}
2
```





## Lists or tuples?

What is the difference between lists and tuples?

Lists are stored in memory as linked lists, meaning that each element in a list holds its value and points to the following element until the end of the list is reached. This means accessing the length of a list is a linear operation: we need to traverse the whole list in order to figure out its size.

Similarly, the performance of list concatenation depends on the length of the left-hand list:

```
iex> list = [1, 2, 3]
[1, 2, 3]

# This is fast as we only need to traverse `[0]` to prepend to `list`
iex> [0] ++ list
[0, 1, 2, 3]

# This is slow as we need to traverse `list` to append 4
iex> list ++ [4]
[1, 2, 3, 4]
```

Tuples, on the other hand, are stored contiguously in memory. This means getting the tuple size or accessing an element by index is fast. However, updating or adding elements to tuples is expensive because it requires creating a new tuple in memory:

```
iex> tuple = {:a, :b, :c, :d}
{:a, :b, :c, :d}
iex> put_elem(tuple, 2, :e)
{:a, :b, :e, :d}
```

Note that this applies only to the tuple itself, not its contents. For instance, when you update a tuple, all entries are shared between the old and the new tuple, except for the entry that has been replaced. In other words, tuples and lists in Elixir are capable of sharing their contents. This reduces the amount of memory allocation the language needs to perform and is only possible thanks to the immutable semantics of the language.
