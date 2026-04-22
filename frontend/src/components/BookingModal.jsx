import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { appointmentTypes, availableSlots } from '../data/mock';
import { toast } from 'sonner';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getAvailableTimesForDate = (date) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    const slot = availableSlots.find(s => s.date === dateStr);
    return slot ? slot.times : [];
  };

  const handleSubmit = () => {
    // Validação básica
    if (!formData.name || !formData.phone || !selectedDate || !selectedTime || !appointmentType) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Simular envio
    const message = `Olá! Gostaria de agendar uma consulta:
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Tipo: ${appointmentTypes.find(t => t.id === appointmentType)?.label}
Data: ${selectedDate.toLocaleDateString('pt-BR')}
Horário: ${selectedTime}
${formData.message ? `Mensagem: ${formData.message}` : ''}`;

    const whatsappUrl = `https://wa.me/5511997203335?text=${encodeURIComponent(message)}`;
    
    toast.success('Redirecionando para WhatsApp...');
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      // Reset form
      setStep(1);
      setSelectedDate(null);
      setSelectedTime('');
      setAppointmentType('');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1000);
  };

  const availableTimes = getAvailableTimesForDate(selectedDate);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Agendar Consulta
          </DialogTitle>
          <p className="text-gray-600">
            Preencha os dados abaixo para agendar sua consulta
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step 1: Personal Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-[#395886]" />
              Dados Pessoais
            </h3>
            
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Appointment Type */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#395886]" />
              Tipo de Consulta
            </h3>
            
            <div>
              <Label>Selecione o tipo *</Label>
              <Select value={appointmentType} onValueChange={setAppointmentType}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Escolha o tipo de consulta" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.label} ({type.duration})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Step 3: Date & Time */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-[#395886]" />
              Data e Horário
            </h3>
            
            <div>
              <Label>Selecione a data *</Label>
              <div className="mt-2 flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => {
                    const dateStr = date.toISOString().split('T')[0];
                    return !availableSlots.some(s => s.date === dateStr);
                  }}
                  className="rounded-md border"
                />
              </div>
            </div>

            {selectedDate && availableTimes.length > 0 && (
              <div>
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Horários disponíveis *
                </Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-[#395886] text-white border-[#395886]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#395886]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Optional Message */}
          <div>
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              placeholder="Deseja adicionar alguma informação adicional?"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="mt-1"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white"
            >
              Confirmar Agendamento
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Ao confirmar, você será redirecionado para o WhatsApp para finalizar o agendamento
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
