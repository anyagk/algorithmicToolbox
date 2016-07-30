using System;

namespace BinarySearch
{
  class Program
  {
    static void Main()
    {
      string[] input;

      input = Console.ReadLine().Split(' ');
      var n = Convert.ToInt32(input[0]);
      var SortedArray = new int[n];
      for(var i = 0; i < n; i++)
        SortedArray[i] = Convert.ToInt32(input[i + 1]);

      input = Console.ReadLine().Split(' ');
      var m = Convert.ToInt32(input[0]);
      var SearchTerms = new int[m];
      for(var i = 0; i < m; i++)
        SearchTerms[i] = Convert.ToInt32(input[i + 1]);

      var results = new int[m];
      for(var i = 0; i < m; i++)
        results[i] = BinarySearchWrapper(SortedArray, SearchTerms[i]);

      Console.WriteLine(String.Join(" ", results));
    }

    private static int BinarySearchWrapper(int[] SortedArray, int SearchTerm)
    {
      return BinarySearch(SortedArray, SearchTerm, 0, SortedArray.Length - 1);
    }
    private static int BinarySearch(int[] SortedArray, int SearchTerm, int low, int high)
    {
      if(high < low)
        return -1;

      var mid = low + ((high - low) / 2);

      if(SearchTerm == SortedArray[mid])
        return mid;

      if(SearchTerm < SortedArray[mid])
        return BinarySearch(SortedArray, SearchTerm, low, mid - 1);

      if(SearchTerm > SortedArray[mid])
        return BinarySearch(SortedArray, SearchTerm, mid + 1, high);

      return -1;
    }
  }
}
