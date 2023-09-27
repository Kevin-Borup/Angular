namespace WebApplication_fossilcarapi.Models
{
    public class Car
    {
        public string Model { get; set; }
        public int Count { get; set; }
        public int Adjustments { get; set; }

        public Car(string model, int count, int adjustments) {
            this.Model = model;
            this.Count = count;
            this.Adjustments = adjustments;
        }
    }
}
