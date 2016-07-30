using System;

namespace MajElement
{
  class Program
  {
    static void Main()
    {
      var input = Console.ReadLine();
      var n = Convert.ToInt32(input);
      var a = new int[n];

      var splitInput = Console.ReadLine().Split(' ');
      for(var i = 0; i < n; i++)
        a[i] = Convert.ToInt32(splitInput[i]);

      Console.WriteLine(MajElementStream(a, n) != -1 ? 1 : 0);
    }
    public static int MajElementStream(int[] a, int size)
    {
      int count = 0;
      int majElement = 0;
      for (var i = 0; i < size; i++)
      {
        if (count == 0)
                majElement = a[i];
        if (a[i] == majElement)
          count++;
        else
          count--;
      }
      count = 0;
      for (var i = 0; i < size; i++)
        if (a[i] == majElement)
          count++;
      if (count > size / 2)
        return majElement;
      return -1;
    }
  }
}
