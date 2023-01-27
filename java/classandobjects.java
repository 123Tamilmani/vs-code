package java;
class Classone
{
    int age = 20;
    String name = "Tamilmani";
}

class Classtwo
{
    public static void main(String args[])
    {
        Classone obj = new Classone();
        System.out.println(obj.age);
        System.out.println(obj.name);
    }
}