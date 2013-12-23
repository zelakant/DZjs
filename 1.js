//Нахождение n-го члена геометрической прогрессии
function GeometricProgression ( b1, q, n ) {
        if( n > 0 )
          return ( b1 * Math.pow( q, n - 1 ) );
		  return -1;

	}
	
//Нахождение числа Фибоначчи по заданному номеру
function Fibonacci(n) {
    var a = 0, b = 1, c, i;
    for (i = 0; i < n; i++){
        c = a + b;
		a = b;
		b = c;
		}
    return a;
}

//Алгоритм быстрой сортировки
function QuickSort(a){
    var QS = function(l, r){
        if (l >= r - 1)
            return;
        var p = r - 1;
        var y = l;
        var tmp;
        for (var i = l; i < r - 1; i++)
            if (a[i] < a[p]){
                tmp = a[i];
                a[i] = a[y];
                a[y] = tmp;
                y++;
            }
        tmp = a[y];
        a[y] = a[r - 1];
        a[r - 1] = tmp;
        QS(l, y);
        QS(y + 1, r);
    }

    QS(0, a.length);
}